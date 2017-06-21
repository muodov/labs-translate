import os
import requests

YANDEX_API_KEY = os.getenv('YANDEX_API_KEY')

LANG_CODES = [
    'az',
    'be',
    'bg',
    'ca',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'et',
    'fi',
    'fr',
    'hr',
    'hu',
    'hy',
    'it',
    'lt',
    'lv',
    'mk',
    'nl',
    'no',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sq',
    'sr',
    'sv',
    'tr',
    'uk'
]


def translate(word, src=None, dest=None, logger=None):
    if src and src not in LANG_CODES:
        src = None
    if dest not in LANG_CODES:
        dest = 'en'

    translation_dir = (src + '-' + dest) if src else dest

    resp = requests.post(
        'https://translate.yandex.net/api/v1.5/tr.json/translate',
        params={
            'key': YANDEX_API_KEY,
            'lang': translation_dir,
            'options': '1',     # return detected language
            'format': 'plain',
            'text': word
        },
        timeout=5
    )

    if resp.status_code == 200:
        r_data = resp.json()
        det_src = src or r_data['detected']['lang']
        return {
            'src': det_src,
            'dst': dest,
            'translation': r_data['text'][0],
            'dictionary': det_src + '-' + dest,
            'raw': r_data
        }
    else:
        if logger:
            logger.error('Translation error: %r', resp.text)
