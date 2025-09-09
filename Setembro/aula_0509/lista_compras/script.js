const form = document.getElementById("form");
const input = document.getElementById("itens");
const tableItens = document.getElementById("table-body");
const table = document.getElementById("table");

const arrayItens = [];

form.addEventListener("submit", (element) => {
  element.preventDefault();
  addItens();
  form.reset();
});

function addItens() {
  const itens = input.value.trim();

  if (itens) {
    table.classList.remove("display-none");
    arrayItens.push(itens);
    updateTable();
    input.value = "";
  }
}

function updateTable() {
  tableItens.innerHTML = "";

  arrayItens.forEach((produto, id) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${id + 1}</td> 
    <td class="td-item">${produto} 
    <button class="btn-remove-item" onclick="removeItens(${id})">X</button> </td>
    `;

    tableItens.appendChild(tr);
  });

  console.log(arrayItens);
}

function removeItens(index) {
  arrayItens.splice(index, 1);
  if (arrayItens.length === 0) {
    table.classList.add("display-none");
  }
  updateTable();
}
