// JavaScript kodas
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    let backgroundColors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800'];
    let currentColorIndex = 0;

    function changeBackgroundColor() {
        body.style.backgroundColor = backgroundColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    }

    setInterval(changeBackgroundColor, 3000);
    document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');

    if (lang === 'en') {
        translateToEnglish();
    } else {
        // Pagal nutylėjimą LT
        translateToLithuanian();
    }
});
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lt]');

    elements.forEach(el => {
        if (lang === 'lt') {
            el.textContent = el.getAttribute('data-lt');
        } else if (lang === 'en') {
            el.textContent = el.getAttribute('data-en');
        }
    });
