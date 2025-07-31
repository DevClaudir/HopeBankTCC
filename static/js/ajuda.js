function clickAccordion(t){
    var pai = document.getElementsByClassName('titulo')[t].parentElement;
    var img = document.getElementsByClassName('icon');
    var conteudo = pai.classList.contains('sectionHide');
    var sessoes = document.getElementsByClassName('section');
    if(conteudo == true){
         
    for(var s = 0; s < sessoes.length; s++){
        sessoes[s].classList = "section sectionHide";
        img[s].style.transform = "rotate("+0+"deg)";
    }
        pai.className = "section sectionShow";
        img[t].style.transform = "rotate("+90+"deg)";
    }
    else{
        pai.className = "section sectionHide";
        img[t].style.transform = "rotate("+0+"deg)";
    }
}