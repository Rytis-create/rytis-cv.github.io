// JavaScript kodas
document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    let backgroundColors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800'];
    let currentColorIndex = 0;

    function changeBackgroundColor() {
        body.style.backgroundColor = backgroundColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    }

    setInterval(changeBackgroundColor, 3000); // Keisti foną kas 3 sekundes
});
