const textArea = document.querySelector(".textArea");
const mensagem = document.querySelector(".mensagem");

 
document.getElementById('mensagem').addEventListener('click', mensagem);
async function copiarMensagem() {
  let text = document.querySelector("#mensagem").value;
  await navigator.clipboard.writeText(text);
}


var btn = document.querySelector("#btn2");
var container_mensagem = document.querySelector(".container_mensagem");
var container_area_copiar = document.querySelector(".container_area_copiar");

btn.addEventListener ( "click" , function() {

    if(container_mensagem.style.display === "block" && container_area_copiar.style.display === "none" ) {
    } 
    else {
        container_area_copiar.style.display = "block";
        container_mensagem.style.display = "none"; 
    }
}
);

//função encriptar/desencriptar
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo [i] [0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo [i] [0] , matrizCodigo [i] [1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo [i] [1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo [i] [1] , matrizCodigo [i] [0]);
        }
    }
    return stringDesencriptada;
}

