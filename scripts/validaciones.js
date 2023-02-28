//query selectors []=data #=id
const inputNacimiento = document.querySelector("#birth")

inputNacimiento.addEventListener("blur", (event)=>{
    validarNacimiento(event.target);
})

function validarNacimiento(input){
    const fechaCliente = new Date(input.value)
    
    let mensaje = "";
    if (!mayorEdad(fechaCliente)) {
        mensaje = "debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje)
    
}

function mayorEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate())
    
    return fechaActual >= diferenciaFechas;
    
}