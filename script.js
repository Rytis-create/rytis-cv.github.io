function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lt]');

    elements.forEach(el => {
        if (lang === 'lt') {
            el.textContent = el.getAttribute('data-lt');
        } else if (lang === 'en') {
            el.textContent = el.getAttribute('data-en');
        }
    });
}
