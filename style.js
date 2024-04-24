let style = document.createElement("style")
style.innerHTML = `

body {
  
  background-image: url('fundo2.png');
   background-size: cover;
    background-attachment: fixed;
  
}

`


// Verifica se o agente do usuário indica que o dispositivo é um computador
function isDesktop() {
  var userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) === false;
}

// Verifica se o tamanho da tela indica que o dispositivo é um computador
function screenSize() {
  return window.innerWidth > 600 && window.innerHeight > 600;
}

// Exemplo de uso
if (isDesktop() && screenSize()) {
  console.log("Este site está sendo executado em um PC.");
} else {
  console.log("Este site não está sendo executado em um PC.");
}