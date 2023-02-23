const mensaje = document.querySelector(".texto");
const mensaje2 = document.querySelector(".textEncriptado");

const Encriptar = () => {
  let resultado = mensaje.value;
  let mensajeEncriptado = resultado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  mensaje2.value = mensajeEncriptado;
};

const Desencriptar = () => {
  let mensajeEncriptado = mensaje.value;
  let resultado = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  mensaje2.value = resultado;
};


const limpiar =()=>{
  mensaje.value = " ";
  mensaje2.value= "";
}

const copiar = ()=>{
  let textocopia = document.querySelector(".textEncriptado");
  textocopia.select();
  textocopia.setSelectionRange(0,9999);
  document.execCommand('copy')
}