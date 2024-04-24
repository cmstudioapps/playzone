let nome = localStorage.getItem("nome")
let email = localStorage.getItem("email")
let mensagem;
let _subject;
let escolher = Math.floor(Math.random()*3)+1
let url = window.location.href
let data = new Date
let diaAtual = data.getDate()
let diaAnterior = localStorage.getItem("diaAnterior")
let confirmado = localStorage.getItem("confirmado")

if (escolher === 1) {
  
  _subject = `Ei ${nome}`
  
  url = "https://cmstudioapps.github.io/playzone/apps.html"
  
  mensagem = `Oi ${nome}! Iai cara, ta afim de conhecer uns jogos ou apps hoje? acesse ${url}`
  
  
}

if (escolher === 2) {
  
  _subject = `${nome} Ta entediado?`
  
  mensagem = `Se tiver entediado Visite a Aba de Videos do App! https://cmstudioapps.github.io/playzone/videos.html`
  
}

if (escolher === 3) {
  
  _subject = `Tenho um Filme pra você🤭`
  url = "https://cmstudioapps.github.io/playzone/filmes.html"
  mensagem = `Pois é ${nome}, o playzone também recomenda Filmes! veja: ${url}`
}



if (diaAtual != diaAnterior) {
if (confirmado) {
  
  fetch('https://formsubmit.co/ajax/' + email, {
    
    
    method: "POST",
    
    body: new URLSearchParams({
      
      _subject,mensagem
      
    })
    
    
  })
  
  .then(response => response.json())
  .then(enviado => {
    
    diaAnterior = diaAtual
    localStorage.setItem("diaAnterior",diaAnterior)
    
    console.log("E-mail enviado ",enviado)
    
  })
}
  
}