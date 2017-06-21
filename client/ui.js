import styles from './styles.scss';
import {translate} from './translate-api.js';

export let translateButton = null;
export let translationCard = null;

export function showTranslateButton(mouseEvent, text) {
    hideTranslateButton();
    translateButton = document.createElement('div');
    translateButton.classList.add(styles['translate-button']);
    translateButton.style.left = mouseEvent.clientX - 40 + 'px';
    translateButton.style.top = mouseEvent.clientY - 20 + 'px';
    translateButton.addEventListener('click', () => {
        console.log('clicked');
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

    let content = document.createElement('div');
    content.classList.add(styles['translate-content']);
    content.textContent = result.translation;
    translationCardContent.appendChild(content);

    translationCard.appendChild(translationCardContent);
    document.body.appendChild(translationCard);
}

export function hideTranslation() {
    if (translationCard && translationCard.parentNode) {
        translationCard.parentNode.removeChild(translationCard);
    }
}
