const addButton = document.querySelector(".addButton");
const clearAllButton = document.querySelector(".clearAllButton");
const mainTable = document.querySelector(".table");
const mainTableBody = document.querySelector("tbody");
let rows = mainTableBody.querySelectorAll("tr").length;
const newItem = '<tr><th scope="row">1</th><td colspan="3">Mark</td><td class="text-right"><button type="button" class="btn btn-warning">Удалить</button></td></tr>'



addButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (!rows) {
    rows = 0;
  }
  let inputText = document.querySelector(".addFormInput").value;
  if (inputText) {
    mainTableBody.innerHTML += `<tr id="${rows}"><td colspan="3">${inputText}</td><td class="text-right"><button type="button" class="btn btn-warning" onclick=deleteItem(${rows})>Удалить</button></td></tr>`;
    rows++;
  } else {
    alert("Empty input :(");
  }
});

clearAllButton.addEventListener("click", (event) => {
  mainTableBody.innerHTML = "";
  rows = 0;
});

function deleteItem(id) {
  console.log(id);
  let item = document.getElementById(id);
  item.innerHTML = "";
}


