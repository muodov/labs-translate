import os
import logging
import requests
from flask import Flask, request, abort, jsonify, send_from_directory

from .lingvo import translate as lingvo_translate

application = Flask(__name__)
application.logger.setLevel(logging.INFO)

YANDEX_API_KEY = os.getenv('YANDEX_API_KEY')

ALLOWED_ORIGIN = os.getenv('ALLOWED_ORIGIN')



@application.route("/")
def hello():
    word = request.args.get('word', '')
    src = request.args.get('src', '')
    dest = request.args.get('dest', '')
    origin = request.headers.get('origin')
    if ALLOWED_ORIGIN and origin and not origin.endswith(ALLOWED_ORIGIN):
        abort(403)
    if not word:
        abort(400)
    
    resp = lingvo_translate(word, src, dest)
    if resp:
        return jsonify(resp)

    abort(404)


@application.route('/<path:path>')
def static_file(path):
    return send_from_directory(
        os.path.join(os.path.dirname(__file__), '..', 'build'),
        path
    )
