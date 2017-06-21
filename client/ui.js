import styles from './styles.scss';
import {translate} from './translate-api.js';

export let overlayEl = null;
export let translateButton = null;
export let translationCard = null;

export function showTranslateButton(mouseEvent, text) {
    // ensureOverlay();
    hideTranslateButton();
    translateButton = document.createElement('div');
    translateButton.classList.add(styles['translate-button']);
    translateButton.style.left = mouseEvent.clientX - 40 + 'px';
    translateButton.style.top = mouseEvent.clientY - 20 + 'px';
    translateButton.addEventListener('click', () => {
        console.log('clicked');
        hideTranslateButton();
        translate({word: text, dest: 'ru'}).then(resp => {
            return resp.json().then(result => {
                showTranslation(result);
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

export function showTranslation(result) {
    console.log('got translation', result);
    hideTranslation();
    translationCard = document.createElement('div');
    translationCard.classList.add(styles['translate-card']);
    
    document.body.appendChild(translationCard);
}

export function hideTranslation() {
    if (translationCard && translationCard.parentNode) {
        translationCard.parentNode.removeChild(translationCard);
    }
}

export function ensureOverlay() {
    if (!overlayEl || overlayEl.parentNode !== document.body) {
        overlayEl = document.createElement('div');
        overlayEl.classList.add(styles['overlay']);
        document.body.appendChild(overlayEl);
    }
}
