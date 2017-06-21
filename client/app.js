import styles from './styles.scss';
import {showTranslateButton, hideTranslateButton, translateButton} from './ui.js';

function detectSelection(mouseEvent) {
    let selection = document.getSelection();
    let selectedText = selection.toString().trim();
    if (selectedText.length > 0) {
        showTranslateButton(mouseEvent, selectedText, selection);
    } else if (mouseEvent.target !== translateButton) {
        console.log(mouseEvent);
        hideTranslateButton();
    }
}

function init() {
    document.addEventListener('mouseup', detectSelection);
    console.log('translation mixin initialized!');
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', e => {
        init();
    });
} else {
    init();
}
