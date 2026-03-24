// Galeria de imagens dinâmicas --> DOM

// Pegando os elementos do HTML
let uploadInput = document.querySelector("#upload");
let btnAdd = document.querySelector("#addImage");
let galeria = document.querySelector(".galeria");
let carrossel = document.querySelector(".carrossel");

// Vetor de imagens
let imagens = [];

btnAdd.addEventListener("click", () => {
  let imageURL = uploadInput.value.trim();
  if (imageURL === "") return;
  // Continua
  imagens.push(imageURL);
  atualizarGaleria();
  atualizarCarrossel();
  uploadInput.value = "";
});

function atualizarGaleria() {
  galeria.innerHTML = ""; // Limpando a galeria
  // Percorrer meu vetor de imagens
  imagens.forEach((imagem, index) => {
    let div = document.createElement("div");
    div.classList.add("imageContainer");
    let img = document.createElement("img");
    img.src = imagem;
    let btnRemove = document.createElement("button");
    btnRemove.innerText = "X";
    btnRemove.classList.add("remove");
    btnRemove.addEventListener("click", () => {
      imagens.splice(index, 1);
      atualizarGaleria(); // Recursão
      atualizarCarrossel();
    });
    div.appendChild(img);
    div.appendChild(btnRemove);
    galeria.appendChild(div);
  });
}

// Atualizar Carrossel
function atualizarCarrossel() {
  carrossel.innerHTML = ""; // limpa o carrossel
  imagens.forEach((imagem) => {
    let img = document.createElement("img");
    img.src = imagem;
    img.style.width = "100%";
    carrossel.appendChild(img);
  });
  carrossel.style.width = `${imagens.length*100}%`;
  inicialCarrossel(); // Iniciar o carrossel
}

function inicialCarrossel(){
    let index = 0;
    setInterval(()=>{
    index = (index + 1) % imagens.length;
    carrossel.style.transition = `transform ${(1 + imagens.length) / imagens.length}s ease-in-out`;
    carrossel.style.transform = `translateX(-${(index * 100) / imagens.length}%)`;

    }, 2000);
}