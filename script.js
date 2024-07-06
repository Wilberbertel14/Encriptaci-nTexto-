function encryptText() {
    let input = document.getElementById("inputText").value;
    let encrypted = btoa(input);
    document.querySelector('.output-text').innerText = encrypted;
    document.getElementById("inputText").value = ''; // Resetea el cuadro de texto
}

function decryptText() {
    let input = document.getElementById("inputText").value;
    try {
        let decrypted = atob(input);
        document.querySelector('.output-text').innerText = decrypted;
    } catch (e) {
        document.querySelector('.output-text').innerText = "Error al desencriptar el texto.";
    }
    document.getElementById("inputText").value = ''; // Resetea el cuadro de texto
}
