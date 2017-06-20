import os
import logging
import requests
from flask import Flask, request, abort, jsonify
application = Flask(__name__)
application.logger.setLevel(logging.INFO)

LINGVO_API_KEY = os.getenv('LINGVO_API_KEY')
LINGVO_API_URL = 'https://developers.lingvolive.com'
ALLOWED_ORIGIN = os.getenv('ALLOWED_ORIGIN')
AUTH = {'token': None}

LANG_CODES = {
    'ch': '1028',
    'da': '1030',
    'de': '1031',
    'el': '1032',
    'en': '1033',
    'es': '1034',
    'fr': '1036',
    'it': '1040',
    'kk': '1087',
    'la': '1142',
    'pl': '1045',
    'ru': '1049',
    'tt': '1092',
    'uk': '1058',
}


def get_auth():
    resp = requests.post(
        LINGVO_API_URL + '/api/v1.1/authenticate',
        headers={'Authorization': 'Basic {key}'.format(key=LINGVO_API_KEY)},
        verify=False
    )
    resp.raise_for_status()
    application.logger.info('got new token: ' + resp.text)
    AUTH['token'] = resp.text


@application.route("/")
def hello():
    word = request.args.get('word', '')
    src = request.args.get('src', '')
    dest = request.args.get('dest', '')
    if ALLOWED_ORIGIN and request.headers.get('origin') != ALLOWED_ORIGIN:
        abort(403)
    if not word:
        abort(400)
    if src not in LANG_CODES:
        src = 'ru'
    if dest not in LANG_CODES:
        dest = 'en'

    if not AUTH['token']:
        get_auth()

    params = {
        'text': word,
        'srcLang': LANG_CODES[src],
        'dstLang': LANG_CODES[dest]
    }
    resp = requests.get(
        LINGVO_API_URL + '/api/v1/Minicard', params=params,
        headers={'Authorization': 'Bearer {key}'.format(key=AUTH['token'])},
        verify=False
    )
    if resp.status_code != 200:
        get_auth()
        resp = requests.get(
            LINGVO_API_URL + '/api/v1/Minicard', params=params,
            headers={'Authorization': 'Bearer {key}'.format(key=AUTH['token'])},
            verify=False
        )

    if resp.status_code == 200:
        application.logger.info('translated: ' + resp.text)
        translation = resp.json()
        data = {
            'SeeAlso': translation.get('SeeAlso'),
            'Heading': translation.get('Heading'),
            'Translation': translation['Translation'].get('Translation'),
            'SoundName': translation['Translation'].get('SoundName'),
            'DictionaryName': translation['Translation'].get('DictionaryName'),
            'raw': translation
        }
        return jsonify(data)
    abort(404)
