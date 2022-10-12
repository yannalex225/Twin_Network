var bouton = document.querySelector('.but_connexion')
var connexion = document.querySelector('.connexion')
var inscription = document.querySelector('.inscription')
var b_inscript = document.querySelector('.but_inscription')
var cross = document.querySelector('.curtain')
var cross_ins = document.querySelector('.curtain_ins')
cross_ins.addEventListener('click',(e)=>{
    inscription.classList.remove('active')
})
cross.addEventListener('click',(e)=>{
    connexion.classList.remove('active')
})
bouton.addEventListener('click',(e)=>{
    connexion.classList.toggle('active')
})
b_inscript.addEventListener('click',(e)=>{
    inscription.classList.toggle('active')
})