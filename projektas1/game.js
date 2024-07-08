// JavaScript kodas žaidimo funkcionalumui

document.addEventListener('DOMContentLoaded', function() {
    const guessForm = document.getElementById('guessForm');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Kompiuterio pasirinktas skaičius nuo 1 iki 10

    guessForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userGuess = parseInt(guessInput.value);

        if (userGuess === randomNumber) {
            showMessage('Teisingai! Atspėjote skaičių.');
            guessInput.disabled = true;
        } else {
            showMessage('Neteisingai. Bandykite dar kartą.');
        }
    });

    function showMessage(msg) {
        message.textContent = msg;
    }
});
