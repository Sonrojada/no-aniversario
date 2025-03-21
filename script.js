// Mostrar la carta cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('carta-popup').style.display = 'flex';
});

// Función para cerrar la carta
function cerrarCarta() {
    document.getElementById('carta-popup').style.display = 'none';
}

// Permitir cerrar la carta con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarCarta();
    }
});

(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Segura?",
    "Segura segura??",
    "De verdad de la buena?",
    "Porfavor mi amor...",
    "Solo piénsalo!!",
    "Si dices que no me voy a poner super triste...",
    "Muy MUY triste...",
    "Me pondré muy muy muy triste...",
    "Vaaale te dejo de preguntar",
    "Es broma, solo dí que sí porfiii"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const buttonsContainer = document.getElementById('buttons-container');
    
    // Cambiar el texto del botón "No"
    noButton.textContent = messages[messageIndex];
    
    // Aumentar el tamaño del botón "Sí"
    const currentYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentYesSize * 1.2}px`;
    
    // Comprobar si es el último mensaje
    if (messageIndex === messages.length - 1) {
        // Eliminar el botón "No" y centrar el botón "Sí"
        noButton.remove();
        buttonsContainer.style.justifyContent = "center";
        yesButton.style.margin = "0 auto";
    } else {
        // Avanzar al siguiente mensaje
        messageIndex++;
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}