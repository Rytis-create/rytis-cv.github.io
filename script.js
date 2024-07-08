// Pavyzdinis JavaScript kodas
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');

    // Pavyzdinis animacijos efektas
    title.addEventListener('mouseover', function() {
        title.style.color = '#4CAF50';
    });

    title.addEventListener('mouseout', function() {
        title.style.color = '#fff';
    });

    // Pavyzdinis palydovų mygtuko funkcionalumas
    const satelliteButton = document.querySelector('.satellite-button');
    const satelliteContainer = document.querySelector('.satellite-container');

    satelliteButton.addEventListener('click', function() {
        satelliteContainer.classList.toggle('visible');
    });

    // Galima pridėti daugiau JavaScript funkcionalumo pagal poreikius
});
