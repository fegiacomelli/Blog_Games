
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let zoom = document.querySelector('#zoom')
let gzoom = document.querySelector('#gzoom')

nome.style.width = '100%'
email.style.width = '100%'



function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red' 
    } else {
       txtNome.innerHTML = 'Nome Válido'
       txtNome.style.color = 'blue'
       nomeOk = true
    }
 
 }
 
 function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'blue'
       emailOk = true
    }
 }
 
 function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length >= 100) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
       txtAssunto.style.display = 'none'
       assuntoOk = true
    }
 }
 
 function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }
 
 function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }
 
 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }


 function vZoom() {
    zoom.style.width = '800px'
    zoom.style.height = '600px'
 }
 
 function nZoom() {
    zoom.style.width = '720px'
    zoom.style.height = '400px'
 }

 function gZoom() {
    gzoom.onfullscreenerror
 }
 
 




