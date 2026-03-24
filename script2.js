// Criar eventos avançados com DOM

// Evento para capturar a tecla digitada
// Evento do documento como um todo
document.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada: " + event.key);
});

// Função de sugestão de texto
let input = document.createElement("input");
input.type = "text";
input.id = "buscar";
input.placeholder = "Digite para Buscar...";

document.body.appendChild(input);

// lista de sugestões
let lista = document.createElement("ul");
lista.id = "sugestoes";
lista.style.listStyle = "none";
document.body.appendChild(lista);

//criar o vetor de sugestões
let sugestoes = [
  "JavaScript",
  "Java",
  "Python",
  "C#",
  "PHP",
  "Dart",
  "Flutter",
  "Kotlin",
  "Ruby",
  "Go",
  "Rusty",
  "Swift",
  "Laravel",
];

// Evento para capturar texto e sugerir do vetor
document.getElementById("buscar").addEventListener("keypress", (event) => {
    let texto = input.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach( (sugestao) => {
        if (sugestao.toLowerCase().includes(texto)) {
          let item = document.createElement("li");
          // Adicionar item a lista de sugestões
          // Porém se item for clicado, o texto do input deve ser preenchido com o item clicado
          item.style.cursor = "pointer";
          item.addEventListener("click", () => {
            input.value = sugestao;
            lista.innerHTML = "";
          });
          item.textContent = sugestao;
          lista.appendChild(item);

        }
    });
});
