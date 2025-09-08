const form = document.getElementById("form");
const input = document.getElementById("itens");
const tableItens = document.getElementById("table-body");

let arrayItens = [];

form.addEventListener("submit", (element) => {
  element.preventDefault();
  const itens = input.value.trim();
  addItens(arrayItens, itens);
  form.reset();
});

function addItens(array, itens) {
  const tr = document.createElement("tr");

  if (itens) {
    array.push(itens);

    array.forEach((produto, id) => {
      tr.innerHTML = `<tr><td>${
        id + 1
      }</td> <td>${produto} </td> <td> <button onclick="${removeItens()}">X</button> </td></tr>`;
    });

    tableItens.appendChild(tr);
    console.log(array);
  }
}

function removeItens() {}

function updateItens() {}
