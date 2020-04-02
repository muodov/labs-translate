import os
import logging
from flask import Flask, request, abort, jsonify, send_from_directory
from raven.contrib.flask import Sentry
from raven.handlers.logging import SentryHandler

SENTRY_DSN = os.getenv('SENTRY_DSN')

# from .lingvo import translate
from .yandex import translate

application = Flask(__name__)
sentry = Sentry(application, dsn=SENTRY_DSN, logging=True, level=logging.INFO)
sentry_handler = SentryHandler(sentry.client)
sentry_handler.setLevel(logging.INFO)
application.logger.addHandler(sentry_handler)
stream_handler = logging.StreamHandler()
stream_handler.setLevel(logging.INFO)
application.logger.addHandler(stream_handler)

application.logger.setLevel(logging.INFO)


ALLOWED_ORIGIN = os.getenv('ALLOWED_ORIGIN')

sentry.captureMessage('app started')


@application.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT'
    return response


@application.route("/", methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        word = request.get_json().get('word', '')
        src = request.get_json().get('src')
        dest = request.get_json().get('dest')
    else:
        word = request.args.get('word', '')
        src = request.args.get('src')
        dest = request.args.get('dest')
    origin = request.headers.get('origin')
    if ALLOWED_ORIGIN and origin and not origin.endswith(ALLOWED_ORIGIN):
        application.logger.warning('Origin not allowed: %s', origin)
        abort(403)
    if not word:
        abort(400)

    resp = translate(word, src, dest, logger=application.logger)
    if resp:
        sentry.captureMessage(
            'Translation succeeded',
            level=logging.INFO,
            extra={'word': word, 'src': src, 'dst': dest, 'result': resp['translation']}
        )
        return jsonify(resp)

    abort(404)


@application.route('/<path:path>')
def static_file(path):
    return send_from_directory(
        os.path.join(os.path.dirname(__file__), '..', 'root'),
        path
    )
