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

function translateToEnglish() {
    document.querySelectorAll('[data-lt]').forEach(function(el) {
        el.textContent = el.getAttribute('data-en');
    });
}

function translateToLithuanian() {
    document.querySelectorAll('[data-en]').forEach(function(el) {
        el.textContent = el.getAttribute('data-lt');// Keisti foną kas 3 sekundes
});
