var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var imagen = document.querySelector(".cajaDeImagen");
var h3 = document.querySelector(".mensaje-h3");
var parrafo = document.querySelector(".mensajeEntrada");
var mensajeNuevo = document.querySelector(".traduccion");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
btCopiar.onclick = copiarMensaje;

function encriptar(){
    ocultarImagen();
    mensajeNuevo.textContent = textoEncriptado(recuperarTexto());
}

function desencriptar(){
    ocultarImagen();
    mensajeNuevo.textContent = textoDesencriptado(recuperarTexto());
}
function recuperarTexto(){
    var area=document.querySelector(".area");
    return area.value;
}

function ocultarImagen(){
    imagen.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
 
function textoEncriptado(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0;i < texto.length;i++){
        if(texto[i]=="a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i]=="e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i]=="i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i]=="o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i]=="u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal=textoFinal+texto[i];
        }
    }
    return textoFinal;

    
}

function textoDesencriptado(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0;i < texto.length;i++){
        if(texto[i]=="a"){
            textoFinal = textoFinal + "a"
            i=i+1;
        }
        else if(texto[i]=="e"){
            textoFinal = textoFinal + "e"
            i=i+4;
        }
        else if(texto[i]=="i"){
            textoFinal = textoFinal + "i"
            i=i+3;
        }
        else if(texto[i]=="o"){
            textoFinal = textoFinal + "o"
            i=i+3;
        }
        else if(texto[i]=="u"){
            textoFinal = textoFinal + "u"
            i=i+3;
        }
        else{
            textoFinal=textoFinal+texto[i];
        }
    }
    return textoFinal;   
}

