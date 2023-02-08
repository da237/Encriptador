function encriptar() {
  let texto = document.querySelector(".texto").value;
  let tituloMensaje = document.querySelector(".titulo-mensaje");
  let parrafo = document.querySelector(".parrafo");

  let textoCifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (texto.length != 0) {
    document.querySelector("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
   
  } else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.querySelector(".texto").value;
  let tituloMensaje = document.querySelector(".titulo-mensaje");
  let parrafo = document.querySelector(".parrafo");

  let textoCifrado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  
    if (texto.length != 0) {
      document.querySelector(".texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
    } else {
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}