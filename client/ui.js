import styles from './styles.scss';
import {translate} from './translate-api.js';

export let translateButton = null;
export let translationCard = null;

const LANG_CODES = [
    'az', 'be', 'bg', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'et',
    'fi', 'fr', 'hr', 'hu', 'hy', 'it', 'lt', 'lv', 'mk', 'nl', 'no',
    'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sq', 'sr', 'sv', 'tr', 'uk'
]

export function showTranslateButton(mouseEvent, text, selection) {
    hideTranslateButton();
    translateButton = document.createElement('div');
    translateButton.classList.add(styles['translate-button']);
    let rect = selection.getRangeAt(0).getBoundingClientRect();
    let posX = Math.floor((rect.left + rect.right) / 2);
    let posY = Math.floor(rect.bottom);

    translateButton.style.left = posX - 20 + 'px';
    translateButton.style.top = posY - 40 + 'px';
    translateButton.addEventListener('click', () => {
        hideTranslateButton();
        translate({word: text, dest: 'en'}).then(resp => {
            return resp.json().then(result => {
                showTranslation(text, result);
            });
        });
    });
    document.body.appendChild(translateButton);
}

export function hideTranslateButton() {
    if (translateButton && translateButton.parentNode) {
        translateButton.parentNode.removeChild(translateButton);
    }
}

export function showTranslation(text, result) {
    console.log('got translation', result);
    hideTranslation();
    translationCard = document.createElement('div');
    translationCard.classList.add(styles['translate-card']);
    let translationCardContent = document.createElement('div');
    translationCardContent.classList.add(styles['translate-card-content']);
    
    let closeButton = document.createElement('div');
    closeButton.classList.add(styles['translate-close']);
    closeButton.addEventListener('click', e => {
        hideTranslation();
    });
    translationCardContent.appendChild(closeButton);

    let header = document.createElement('h1');
    header.classList.add(styles['translate-header']);
    header.textContent = text.length > 10 ? text.slice(0, 10) + '...' : text;
    translationCardContent.appendChild(header);

    let controls = document.createElement('div');
    controls.classList.add(styles['translate-controls']);
    let srcSelect = document.createElement('select');
    LANG_CODES.forEach(code => {
        let choice = document.createElement('option');
        if (result.src === code) {
            choice.selected = true;
        }
        choice.value = choice.textContent = code;
        srcSelect.appendChild(choice);
    });
    let arrow = document.createElement('span');
    arrow.textContent = ' -> ';
    let dstSelect = document.createElement('select');
    LANG_CODES.forEach(code => {
        let choice = document.createElement('option');
        if (result.dst === code) {
            choice.selected = true;
        }
        choice.value = choice.textContent = code;
        dstSelect.appendChild(choice);
    });

    function changeDirection() {
        srcSelect.disabled = true;
        dstSelect.disabled = true;
        translate({word: text, src: srcSelect.value, dest: dstSelect.value}).then(resp => {
            srcSelect.disabled = false;
            dstSelect.disabled = false;
            return resp.json().then(result => {
                showTranslation(text, result);
            });
        });
    }
    srcSelect.addEventListener('change', changeDirection);
    dstSelect.addEventListener('change', changeDirection);

    controls.appendChild(srcSelect);
    controls.appendChild(arrow);
    controls.appendChild(dstSelect);
    translationCardContent.appendChild(controls);

    let content = document.createElement('div');
    content.classList.add(styles['translate-content']);
    content.textContent = result.translation;
    translationCardContent.appendChild(content);

    let footer = document.createElement('div');
    footer.classList.add(styles['translate-footer']);
    footer.innerHTML = 'Powered by <a href="http://translate.yandex.com/" target="_blank">Yandex.Translate</a>';
    translationCardContent.appendChild(footer);

    translationCard.appendChild(translationCardContent);
    document.body.appendChild(translationCard);
}

export function hideTranslation() {
    if (translationCard && translationCard.parentNode) {
        translationCard.parentNode.removeChild(translationCard);
    }
}
