/*
var contenido;
const clase = document.querySelector('.parrafos'); // esto selecciona la clase
var elemento = clase.querySelector('.entrada-texto');
var boton = clase.querySelector('button');


function crear() {

    contenido = elemento.value;
    const p = document.createElement("p");
    const pTexto = document.createTextNode(contenido);
    p.appendChild(pTexto);
    
    clase.appendChild(p);
}


function mostrar() {
    crear();
    alert(contenido + "hola");
}


boton.onclick = crear;


*/

const boton_encriptar = document.querySelector("#botones__encriptar");
const boton_desencriptar = document.querySelector("#botones__desencriptar");
const boton_copiar = document.querySelector("#boton__copiar");

//Encriptamos el texto que nos pasan y lo mostramos en pantalla.
boton_encriptar.addEventListener("click", () => {
  const salida = document.querySelector("#resultado");
  const entrada = document.querySelector("#texto");
  let contenido = entrada.value;
  let cadena_encriptada = "";
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
    
    salida.style.color = "#ff2825";
    salida.value = cadena_encriptada;
});


//Desencriptamos el texto que nos pasan y lo mostramos en pantalla
boton_desencriptar.addEventListener("click", () => {
  const salida = document.querySelector("#resultado");
  const entrada = document.querySelector("#texto");
  let contenido = entrada.value;

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
  
  salida.style.color = "#00b341";
  salida.value = contenido;
});


//Copiamos el texto que viene en el texarea de salida
boton_copiar.addEventListener("click", () => {
  const salida = document.querySelector("#resultado");
  navigator.clipboard.writeText(salida.value);
});


