// Header

let header = document.createElement("header");

header.style.backgroundColor = "black";
header.style.height = "8vh";

document.body.style.margin = "0";
document.body.appendChild(header);

// Nav dentro do header
let divNav = document.createElement("div");

divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.height = "100%";
divNav.style.color = "aliceblue";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Comic Sans MS";

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"];

itensNav.forEach((e) => {
  let item = document.createElement("a");
  item.innerText = e;
  item.href = e.toLowerCase() + ".html";
  item.style.textDecoration = "none";
  item.style.color = "aliceblue";
  divNav.appendChild(item);
});

// Footer
let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "10vh";
footer.style.width = "100%";
footer.style.color = "aliceblue";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.position = "fixed";
footer.style.bottom = "0";
document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.fontSize = "3vh";
divFooter.style.fontFamily = "Comic Sans MS";
divFooter.innerText =
  "Copyright © 2026 - Todos os direitos reservados ao Senai.";
footer.appendChild(divFooter);

// Clonar elementos com Dom
let card = document.createElement("div"); // Adiciona a Class Card no elemento => <div class="card">
card.classList.add("card");
card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "darkred";

// Criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("container");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width = "90%";
container.style.flexWrap = "wrap"; // Quebrar a linha dos elementos filhos

// Clonar as div.card
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar"; // Adicionando um id para o botão
document.body.appendChild(btnClonar); // Add btn ao body
document.body.appendChild(container); // Add container ao body
container.appendChild; // Add card ao container

// Criar um método para adicionar evento ao btn
btnClonar.addEventListener("click", () => {
  let clonar = card.cloneNode(true); // Clona o card
    container.appendChild(clonar); // Adiciona o card clonado ao container
});

// Criar uma chave de Modo claro e escuro 
let chave = document.createElement("input"); // Tipo input
chave.type = "checkbox";
chave.id = "darkMode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px";

document.body.appendChild(chave); // Add chave ao body

// Criando evento para a chave
chave.addEventListener("change", () => {
  document.body.classList.toggle("darkMode"); // Adiciona ou o dark-mode do body
});