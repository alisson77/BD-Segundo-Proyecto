// script.js

document.addEventListener('DOMContentLoaded', function() {
    const selectionPercentage = document.getElementById('selection-percentage');
    const mutationPercentage = document.getElementById('mutation-percentage');
    const crossoverPercentage = document.getElementById('crossover-percentage');
    const selectionPercentageValue = document.getElementById('selection-percentage-value');
    const mutationPercentageValue = document.getElementById('mutation-percentage-value');
    const crossoverPercentageValue = document.getElementById('crossover-percentage-value');
    const errorMessage = document.getElementById('error-message');
    const startButton = document.getElementById('start-button');
    const targetImageDisplay = document.getElementById('target-image-display');
    const generatedImageDisplay = document.getElementById('generated-image-display');

    function updatePercentages() {
        const selection = parseInt(selectionPercentage.value);
        const mutation = parseInt(mutationPercentage.value);
        const crossover = parseInt(crossoverPercentage.value);

        selectionPercentageValue.textContent = `${selection}%`;
        mutationPercentageValue.textContent = `${mutation}%`;
        crossoverPercentageValue.textContent = `${crossover}%`;

        const total = selection + mutation + crossover;
        if (total !== 100) {
            errorMessage.textContent = `Los porcentajes deben sumar 100%. Actualmente suman ${total}%.`;
            errorMessage.style.display = 'block';
            startButton.disabled = true;
        } else {
            errorMessage.style.display = 'none';
            startButton.disabled = false;
        }
    }

    selectionPercentage.addEventListener('input', updatePercentages);
    mutationPercentage.addEventListener('input', updatePercentages);
    crossoverPercentage.addEventListener('input', updatePercentages);

    startButton.addEventListener('click', function() {
        // Aquí iría la lógica para iniciar el algoritmo genético
        console.log("Iniciar el algoritmo genético con los parámetros establecidos.");
        // Generar una imagen de ejemplo para mostrar como la imagen generada
        generatedImageDisplay.src = targetImageDisplay.src; // Esto es solo un ejemplo, deberás reemplazarlo con la lógica de tu algoritmo
    });

    window.loadTargetImage = function(event) {
        const image = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            targetImageDisplay.src = e.target.result;
        };
        reader.readAsDataURL(image);
    };
});

