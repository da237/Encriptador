let entrada = document.querySelector("#cajaMensaje");
let salida = document.querySelector("#contenidoResultado");
const validarEspacios = /^\s/, // Inicia con caracter de espacio (tabulación, salto de línea, etc.)
    validarEncriptador = /[aeiou\n]/g, // Contiene cualquier vocal.
    validarDesencriptador = /(ai|enter|imes|ober|ufat|\n)/g, // Contiene cualquiera de las palabras en el interior del grupo (paréntesis).
    caracteresNoValidos = /[^a-z\s]/; // No contiene ninguna letra minúscula, ni espacio.

function llamar(botones) {
    let boton = botones.id; // Captura el ID del botón que llamó a la función.
    if (entrada.value === "") {
        swal("Inténtalo nuevamente","El campo no puede estar vacio.\nSolo se permiten minúsculas y sin acentos.","info");
    } else if (validarEspacios.test(entrada.value)) {
        swal("Surgió un problema","El campo ingresado NO debe iniciar con espacios en blanco.\nSolo se permiten minúsculas y sin acentos.","warning");
    } else if (entrada.value === null) {
        swal("Error","Error con los datos ingresados.\nSolo se permiten minúsculas y sin acentos.","error");
        location.reload();
    } else if (caracteresNoValidos.test(entrada.value)) {
        swal("Caracteres no permitidos","El campo ingresado contiene caracteres especiales, no permitidos.\nSolo se permiten minúsculas y sin acentos.","error");
        location.reload();
    } else {
        // Llama a una función, dependiendo del ID del botón que llamó inicialmente a la función "llamar".
        switch (boton) {
            case "encriptar":
                encriptar();
                break;
            case "desencriptar":
                desencriptar();
                break;
        };
    };
};

function encriptar() {
    if (validarEncriptador.test(entrada.value)) {
        document.querySelector("#imagenResultado").style.display = "none";
        document.querySelector("#tituloResultado").textContent = "Tu mensaje encriptado";
        document.querySelector("#tituloResultado").style.color = "#0A3871";
        /* Reemplaza en el ID "contenidoResultado" los caracteres que cumplan la condición de la regex validarEncriptador,
        basado en el caracterEncriptador (lo define automáticamente el replaceAll), siempre que encuentre
        un caracter que cumpla con la condición validarEncriptador, llama a la función y envía el caracter como CaracterEncriptador. */
        document.querySelector("#contenidoResultado").innerHTML = entrada.value.replaceAll(validarEncriptador, function (caracterEncriptador) {
            return reemplazarEncriptador[caracterEncriptador];
        });
        document.querySelector("#contenidoResultado").className = "contenidoResultadoFinal";
        swal("Todo salió bien","Su mensaje ha sido encriptado exitosamente.","success");
        entrada.value = "";
        document.querySelector("#copiar").style.display = "inline";
    } else {
        swal("Intenta con otro mensaje","El mensaje ingresado no se puede encriptar.","warning");
    };
};

const reemplazarEncriptador = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat", "\n": "<br>" };

function desencriptar() {
    if (validarDesencriptador.test(entrada.value)) {
        document.querySelector("#imagenResultado").style.display = "none";
        document.querySelector("#tituloResultado").textContent = "Tu mensaje desencriptado";
        document.querySelector("#tituloResultado").style.color = "#0A3871";
        document.querySelector("#contenidoResultado").innerHTML = entrada.value.replaceAll(validarDesencriptador, function (caracterDesencriptador) {
            return reemplazarDesencriptador[caracterDesencriptador];
        });
        document.querySelector("#contenidoResultado").className = "contenidoResultadoFinal";
        swal("Todo salió bien","Su mensaje ha sido desencriptado exitosamente.","success");
        entrada.value = "";
        document.querySelector("#copiar").style.display = "inline";
    } else {
        swal("Intenta con otro mensaje","El mensaje ingresado no está encriptado.","info");
    };
};

const reemplazarDesencriptador = { "ai": "a", "enter": "e", "imes": "i", "ober": "o", "ufat": "u", "\n": "<br>" };

function copiar() {
    let elementoAuxiliar = document.createElement("textarea"); // Crea un elemento de apoyo, una caja de textarea.
    // Pasa el contenido de la variable "salida" (se usa innerHTML porque se está cambiando el código HTML) al elemento "elementoAuxiliar" (se usa textContent porque solo se está trabajando con el texto).
    elementoAuxiliar.textContent = salida.innerHTML.replaceAll(/<br>/g,"\n");
    elementoAuxiliar.select();
    navigator.clipboard.writeText(elementoAuxiliar.value); // Escribe la cadena de texto presente en "elementoAuxiliar", es decir, su contenido o valor; en el portapapeles del sistema.
    salida.textContent = "";
    swal("Todo salió bien","Texto copiado satisfactoriamente.","success");
    document.querySelector("#copiar").style.display = "none";
    document.querySelector("#tituloResultado").textContent += " se ha copiado en el portapapeles.";
    document.querySelector("#tituloResultado").className = "tituloResultadoFinal";
    // Espera 2000ms o 2s para llamar a la función location.reload(), es decir, para recargar la página.
    setTimeout(() => {
        location.reload()
    }, 2000);
};