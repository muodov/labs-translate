import styles from './styles.scss';
import {showTranslateButton, hideTranslateButton, translationCard, showNote} from './ui.js';

function detectSelection() {
    let selection = document.getSelection();
    let selectedText = selection.toString().trim();
    if (selectedText.length > 0 && !translationCard) {
        showTranslateButton(selectedText, selection);
    } else {
        hideTranslateButton();
    }
}

function init() {
    document.addEventListener('selectionchange', detectSelection);
    showNote();
    console.log('translation mixin initialized!');
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', e => {
        init();
    });
} else {
    init();
}
