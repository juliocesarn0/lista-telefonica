const form = document.getElementById("form-numeros");
const formNome = document.getElementById("form-nome");
const formTelefone = document.getElementById("form-telefone");
let linhas = "";

const telefones = [];
const nomes = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionarTelefone();
  atualizaTabela();
});

function adicionarTelefone() {
  if (telefones.includes(formTelefone.value)) {
    console.log("error");
    alert(`O telefone ${formTelefone.value} já está inserido`);
  } else {
    nomes.push(formNome.value);
    telefones.push(formTelefone.value);

    let linha = "<tr>";
    linha += `<td>${formNome.value}</td>`;
    linha += `<td>${formTelefone.value}</td>`;
    linha += `</td>`;

    linhas += linha;
  }

  formNome.value = "";
  formTelefone.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
