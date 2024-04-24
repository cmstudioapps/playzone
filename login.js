let nome = localStorage.getItem("nome")
let idade = localStorage.getItem("idade")
let email = localStorage.getItem("email")
let nascimento = localStorage.getItem("nascimento")
let msgConfirm = document.getElementById("msgConfirm")
let dados;
let data = new Date

let confirmado = localStorage.getItem("confirmado")

let login = document.getElementById("login")

if (!confirmado) {

login.showModal()

} else {
  
  login.close()
  
  
}



let loop = setInterval(rend,0)

function rend() {
if (!confirmado) {
let renderizar = document.getElementById("renderizar")

let idade = document.getElementById("idade").value

renderizar.innerHTML = idade
} else {
  
 clearInterval(loop)
  
}

}

let cd;
function loginn() {
  
  let name = document.getElementById("nome").value
  let idad = document.getElementById("idade").value
  let emaill = document.getElementById("email").value
  let nasciment = document.getElementById("nascimento").value
  let codigo = document.getElementById('codigo').value
  
  if (!name || !idad || !emaill || !nasciment) {
    
    alert("Preencha Todos os campos corretamente!")
  } else {
    
    nome = name
    localStorage.setItem("nome",nome)
    
    idade = idad
    localStorage.setItem("idade",idade)
    
    email = emaill
    localStorage.setItem("email",email)
    
    nascimento = nasciment
    localStorage.setItem("nascimento",nascimento)
    
    dados = {
      
      Usuários: nome,
      Idade: idade,
      Email: email
      
      
    }
    
    
     cd = Math.floor(Math.random()*200)*100
     
    let _subject = "Código de confirmação playzone"
    let mensagem = `Seu codigo é ${cd}, use para confirmar seu e-mail no Playzone! Boa sorte ${nome}.`
    
    fetch('https://formsubmit.co/ajax/' + email, {
      
      method: "post",
      body: new URLSearchParams({
        
        _subject,mensagem
        
        
      })
      
      
    })
    
    .then(response => response.json())
    .then(data => {
      
      
      
      msgConfirm.innerHTML = `
      <div style='background-color: greenyellow; color: green; padding: 10px; border-radius: 20px;'><h3>Enviamos um código de confirmação para ${emaill}</h3></div>
      
      `
      
      
    })
    .catch(error => {
      
      let msgConfirm = document.getElementById("msgConfirm")
      
      msgConfirm.innerHTML = `
      <div style='background-color: red; color: white; padding: 10px; border-radius: 20px;'><h3>Ocorreu um erro ao enviar código para ${emaill} , ${error}</h3></div>
      
      `
      
    })
    
  }
  
}

function confirmar() {
  
  let codigo = document.getElementById('codigo').value
  
  if (codigo == cd) {
    
    msgConfirm.innerHTML = `
      <div style='background-color: greenyellow; color: green; border-radius: 20px; padding: 10px; margin: 10px;'><h3>O código de confirmação está correto!<br>Aguarde...</h3></div>
      
      `
      
      fetch('https://api.sheetmonkey.io/form/9Yvhhryo5CCoWSZmWr555V', {
        
        method: "post",
        headers: {
          
          'Content-type': 'application/json'
          
        },
        body: JSON.stringify(dados)
        
        
        
      })
      
      .then(response => response.text())
      .then(data => {
        confirmado = true
      localStorage.setItem("confirmado",confirmado)
      
      
        location.reload()
        
      })
      .catch(erro => {
      msgConfirm.innerHTML = "Ocorreu um erro no envio, Tente novamente."
      console.log("Errro no envio de dados ",erro)
      })
      
      
    
    
  } else {
    
    
    
      msgConfirm.innerHTML = `
      <div style='background-color: red; color: white; border-radius: 20px; padding: 10px; margin: 10px;'><h3>O código de confirmação está incorreto...</h3></div>
      
      `
    
    
  }
  
}