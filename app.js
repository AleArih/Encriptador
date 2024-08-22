function copiarTexto() {
    var textoEncriptado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(textoEncriptado).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Hubo un problema al copiar el texto");
    });
}

function encriptar() {
    var texto = document.getElementById("texto").value;
    if (texto) {
        var mensajeEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        // Mostrar el texto encriptado y ocultar la imagen y el mensaje inicial
        document.getElementById("resultado").innerText = mensajeEncriptado;
        document.getElementById("imagen").style.display = "none";
        document.getElementById("mensaje-inicial").style.display = "none";

        // Mostrar el botón de copiar
        document.getElementById("copiar").style.display = "inline-block";
    } else {
        resetearMensaje();
    }
}

function desencriptar() {
    var texto = document.getElementById("texto").value;
    if (texto) {
        var mensajeDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        // Mostrar el texto desencriptado y ocultar la imagen y el mensaje inicial
        document.getElementById("resultado").innerText = mensajeDesencriptado;
        document.getElementById("imagen").style.display = "none";
        document.getElementById("mensaje-inicial").style.display = "none";

        // Mostrar el botón de copiar
        document.getElementById("copiar").style.display = "inline-block";
    } else {
        resetearMensaje();
    }
}

function resetearMensaje() {
    // Si no hay texto, mostrar la imagen y el mensaje inicial, y limpiar el resultado
    document.getElementById("imagen").style.display = "block";
    document.getElementById("mensaje-inicial").style.display = "block";
    document.getElementById("resultado").innerText = "";
    
    // Ocultar el botón de copiar
    document.getElementById("copiar").style.display = "none";
}
