// Evento de verificação de formulário

// Criar o formulário com DOM
let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form);

// Input para nome
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu nome";
inputNome.id = "nome";
form.appendChild(inputNome);

// Input para email
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Digite seu email";
inputEmail.id = "email";
form.appendChild(inputEmail);

// Botão de enviar
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);

// Adicionar um parágrafo para enviar uma mensagem de validação
let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);

// Evento de validaçao do formulário
document.getElementById("formCadastro").addEventListener("submit", (event) => {
  // Evitar o recarregamento da página
  event.preventDefault();
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let mensagem = document.getElementById("mensagem");

  // Condição
  if (nome.value === "" || email.value === "") {
    mensagem.innerText = "Preencha Todos os Campos!";
    mensagem.style.color = "red";
  } else {
    mensagem.innerText = "Cadastro Realizado com Sucesso!!!";
    mensagem.style.color = "lightgreen";

    // Limpa os campos
    nome.value = "";
    email.value = "";
  }
});
