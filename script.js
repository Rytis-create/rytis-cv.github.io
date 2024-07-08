// Pridėkime JavaScript kodą

// Paimkime visus mygtukus su klasės pavadinimu "button"
const buttons = document.querySelectorAll('.button');

// Užregistruokime įvykius kiekvienam mygtukui
buttons.forEach(button => {
    // Kai pele užėjima ant mygtuko, pridėkime klasę "hovered"
    button.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });

    // Kai pele išėjima nuo mygtuko, pašalinkime klasę "hovered"
    button.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
    });
});
