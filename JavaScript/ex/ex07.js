//EXPLORANDO O DOM DO NAVEGADOR/MANIPULANDO HTML
let novoTitulo = (document.getElementById("titulo1").innerHTML =
  "Olá, eu sou um titulo gerado pelo JavaScript");

let novoElemento = document.createElement("h2");
novoElemento.innerHTML =
  "Olá minha rapaziada, sou um novo elemento gerado pelo JavaScript";
document.body.appendChild(novoElemento);

let removerNome = document.getElementById("nome");
removerNome.remove();
