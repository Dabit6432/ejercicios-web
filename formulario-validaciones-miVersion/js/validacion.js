export function valida(input) {
    const tipoDataSet = input.dataset.tipo;

    if(validadores[tipoDataSet]) {
        validadores[tipoDataSet](input);
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove("campo--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("campo--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDataSet, input);
    }
} 

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

const mensajesDeError = {
    nombre: {
        valueMissing : "El campo nombre no puede estar vacío",
    },

    apellidos: {
        valueMissing: "El campo apellidos no puede estar vacío",
    },

    nacimiento: {
        valueMissing: "El campo fecha de nacimiento no puede estra vacío",
        customError: "Debes tener almenos 18 años de edad",
    },

    nombre_usuario: {
        valueMissing: "El campo nombre de usuario no puede estar vacio"
    },

    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },

    password: {
        valueMissing: "El campo contraseña con puede estra vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales"
    },

    direccion: {
        valueMissing: "El campo dirección con puede estra vacío",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres.",
    },

    ciudad: {
        valueMissing: "Este campo ciudad no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
      },

    estado: {
        valueMissing: "Este campo estado no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
      },

    telefono: {
        valueMissing: "Este campo telefono no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
    },

};

const validadores = {
    nacimiento: (input) => validarEdad(input),
};


function mostrarMensajeError(tipoDataSet, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]) {
            console.log(tipoDataSet, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDataSet][error]);
            mensaje = mensajesDeError[tipoDataSet][error];
        }
    });

    return mensaje;
}

function validarEdad(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";

    if(!esMayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener almenos 18 años de edad";
    }

    input.setCustomValidity(mensaje);

}

function esMayorDeEdad(fecha) {
    const fechaActual = new Date();
    const fechaClienteGet = new Date(
        fecha.getUTCFullYear() + 18, //Le sumamos 18 porque asi deberia ser mayor de edad
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );

    return fechaClienteGet <= fechaActual; //se supones como le sumamos 18 a la fecha del cliente debe ser menor o igual a la fecha actual si no no es mayor de edad
}