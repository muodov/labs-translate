import styles from './styles.scss';


function init() {
    console.log('annotations initialized!');
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', e => {
        init();
    });
} else {
    init();
}
