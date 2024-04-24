
//Usa localização para ver a região que o app é mais usado e consequentemente usar os dados para melhorar a experiência.
navigator.geolocation.getCurrentPosition(localizado,erro)

function localizado(geolocation) {
  
 
 
  
  
}

//funcoes de redirecionamentos:

 
function Filmes() {
  
  window.location.href = "filmes.html"
  
}

function videos() {
  
  window.location.href = "index.html"
  
  
}

function manga() {
  
  
  window.location.href = "manga.html"
  
}

function config() {
  
  alert("Estará disponível em breve!")
  
  
}

function chat() {
  
  window.location.href = "chat.html"
  
  
}

function jogos() {
  
  alert("Estará disponível EM BREVE!")
  
  
}


function soloLeveling() {
  
  let capitulo = document.getElementById("cap").value
  
  
  if (capitulo == "cap1") {
    
    window.location.href = "Solo-Leveling-V1C1-O-Caçador-Rank-E (1).pdf"
    
  }
  
  if (capitulo == "cap2") {
    
    window.location.href = "Solo-Leveling-V1C2-Duplo-Calabouço.pdf"
    
  }
  
}


window.addEventListener("contextmenu", function() {
  
  preventDefault()
  
  
})