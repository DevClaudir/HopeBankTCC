
var ola = document.querySelector(".mensagem").style.display="none";

function clicou(){
if (ola){
    document.querySelector(".mensagem").style.display="block";
}
}
function fechar(){
    if (ola){
        document.querySelector(".mensagem").style.display="none";
    }
}
