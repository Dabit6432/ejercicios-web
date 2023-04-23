//Autor David Jonathan Lázaro Pérez

var contenido;
var text_area = document.querySelector("#area-texto");

var boton_encriptar = document.querySelector(".boton-azul");
var boton_desencriptar = document.querySelector(".boton-blanco");
var texto_no_encontrado = document.querySelector("#texto-no-encontrado");
var texto_ingresa_texto_deseado = document.querySelector("#texto-ingresa-texto-deseado");
var boton_copiar = document.querySelector("#boton-copiar");
var parrafo_resultado = document.querySelector("#resultado");
var imagen_textoNoencontrado = document.querySelector("#imagen-notext");

var cadena_encriptada = "";
var cadena_encriptada2;
var verdadE = false;
var verdadDE = false;

function encriptar() {
    contenido = text_area.value;
    for (var i = 0; i < contenido.length; i++) {
        if(contenido.charAt(i) == 'e') {
            cadena_encriptada += "enter";
          } else if (contenido.charAt(i) == 'i') {
            cadena_encriptada += "imes";
          } else if (contenido.charAt(i) == 'a') {
            cadena_encriptada += "ai";
          } else if (contenido.charAt(i) == 'o') {
            cadena_encriptada += "ober";
          } else if (contenido.charAt(i) == 'u') {
            cadena_encriptada += "ufat";
          } else {
            cadena_encriptada += contenido.charAt(i);
          }
    }
}

function desencriptar() {

    contenido = text_area.value;

    if(contenido.includes("enter")) {
        contenido = contenido.replaceAll("enter","e");
    }

    if(contenido.includes("imes")) {
        contenido = contenido.replaceAll("imes", "i");
      }
  
    if(contenido.includes("ai")) {
        contenido = contenido.replaceAll("ai", "a");
      }
  
    if(contenido.includes("ober")) {
        contenido = contenido.replaceAll("ober", "o");
      }
  
    if(contenido.includes("ufat")) {
        contenido = contenido.replaceAll("ufat", "u");
      }
}

function modificaVisibilidadEncriptar() {

    encriptar();
    parrafo_resultado.innerText = cadena_encriptada; //Con esto modificamos el contenido de un parrafo
    cadena_encriptada2 = cadena_encriptada;
    cadena_encriptada = "";

    texto_no_encontrado.style.display = "none";
    texto_ingresa_texto_deseado.style.display = "none";
    imagen_textoNoencontrado.style.display = "none";
    boton_copiar.style.display = "block";

    verdadE = true;
   
}

function modificaVisibilidadDesencriptar() {

    desencriptar();
    parrafo_resultado.innerText = contenido;

    texto_no_encontrado.style.display = "none";
    texto_ingresa_texto_deseado.style.display = "none";
    imagen_textoNoencontrado.style.display = "none";
    boton_copiar.style.display = "block";

    verdadDE = true;
}

function copiarTexto() {
    if(verdadE) {
        navigator.clipboard.writeText(cadena_encriptada2);
    }

    if(verdadDE) {
        navigator.clipboard.writeText(contenido);
    }
}


boton_encriptar.onclick = modificaVisibilidadEncriptar;
boton_desencriptar.onclick = modificaVisibilidadDesencriptar;
boton_copiar.onclick = copiarTexto;