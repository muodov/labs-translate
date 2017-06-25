import styles from './styles.scss';
import {translate} from './translate-api.js';

export let translateButton = null;
export let translationCard = null;
export let note = null;
export let textToTranslate = '';

const LANG_CODES = [
    'az', 'be', 'bg', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'et',
    'fi', 'fr', 'hr', 'hu', 'hy', 'it', 'lt', 'lv', 'mk', 'nl', 'no',
    'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sq', 'sr', 'sv', 'tr', 'uk'
]

export function initTranslateButton() {
    translateButton = document.createElement('div');
    translateButton.classList.add(styles['translate-button']);
    translateButton.addEventListener('mousedown', () => {
        hideTranslateButton();
        showTranslation(textToTranslate);
    });
    document.body.appendChild(translateButton);
}

export function showTranslateButton(text, selection) {
    if (!translateButton) {
        initTranslateButton();
    }
    textToTranslate = text;

    // let rect = selection.getRangeAt(0).getBoundingClientRect();
    // let posX = Math.floor((rect.left + rect.right) / 2);
    // let posY = rect.bottom;

    // translateButton.style.left = posX - 20 + 'px';
    // translateButton.style.top = posY - 40 + 'px';

    translateButton.classList.add(styles['shown']);
    note.classList.remove(styles['shown']);
}

export function hideTranslateButton() {
    if (translateButton && translateButton.parentNode) {
        translateButton.classList.remove(styles['shown']);
        note.classList.add(styles['shown']);
    }
}

export function showTranslation(text, dest) {
    hideTranslation();
    translationCard = document.createElement('div');
    translationCard.classList.add(styles['translate-card']);
    translationCard.addEventListener('click', e => {
        if (e.target === translationCard) {
            hideTranslation();
        }
    });

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

    let spinner = document.createElement('div');
    spinner.classList.add(styles['spinner']);
    translationCardContent.appendChild(spinner);

    let footer = document.createElement('div');
    footer.classList.add(styles['translate-footer']);
    footer.innerHTML = 'Powered by <a href="http://translate.yandex.com/" target="_blank">Yandex.Translate</a>';
    translationCardContent.appendChild(footer);

    translationCard.appendChild(translationCardContent);
    document.body.appendChild(translationCard);

    translate({word: text, dest: dest}).then(resp => {
        return resp.json().then(result => {
            console.log('got translation', result);

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
                translationCardContent.replaceChild(spinner, translationBody);
                translate({word: text, src: srcSelect.value, dest: dstSelect.value}).then(resp => {
                    return resp.json().then(result => {
                        translationCardContent.replaceChild(translationBody, spinner);
                        content.textContent = result.translation;
                    });
                });
            }
            srcSelect.addEventListener('change', changeDirection);
            dstSelect.addEventListener('change', changeDirection);

            controls.appendChild(srcSelect);
            controls.appendChild(arrow);
            controls.appendChild(dstSelect);

            let content = document.createElement('div');
            content.classList.add(styles['translate-content']);
            content.textContent = result.translation;

            let translationBody = document.createElement('div');
            translationBody.classList.add(styles['translate-body']);
            translationBody.appendChild(controls);
            translationBody.appendChild(content);

            translationCardContent.replaceChild(translationBody, spinner);
        });
    });
}

export function hideTranslation() {
    if (translationCard && translationCard.parentNode) {
        translationCard.parentNode.removeChild(translationCard);
        translationCard = null;
    }
}

export function showNote() {
    note = document.createElement('div');
    note.classList.add(styles['note']);
    note.classList.add(styles['shown']);
    note.textContent = 'Welcome to the Surfly Labs Translation demo! Select text you would like to translate';
    document.body.appendChild(note);
}
