const form = document.getElementById("form");
const input = document.getElementById("itens");
const listaItens = document.getElementById("lista-produtos");

const arrayItens = [];

form.addEventListener("submit", (element) => {
  element.preventDefault();
  const itens = input.value.trim();
  const li = document.createElement("li");

  if (itens) {
    arrayItens.push(itens);

    for (let i = 0; i < arrayItens.length; i++) {
      li.textContent = arrayItens[i];
    }
    
    listaItens.appendChild(li);
    console.log(arrayItens);
  }

  form.reset();
});
