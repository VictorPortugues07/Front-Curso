document
  .getElementById("form-animais")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const especie = document.getElementById("especie").value;
    const idade = document.getElementById("idade").value;
    const habitat = document.getElementById("habitat").value;

    if (!nome || !especie || !idade || !habitat) {
      alert("Preencha todos os campos.");
      return;
    }

    const novoAnimal = { nome, especie, idade, habitat };

    let animais = JSON.parse(localStorage.getItem("animais")) || [];
    animais.push(novoAnimal);
    localStorage.setItem("animais", JSON.stringify(animais));

    document.getElementById("form-animais").reset();
    alert("Animal cadastrado com sucesso!");
    listarAnimais();
  });

function listarAnimais() {
  const container = document.getElementById("lista-animais");
  container.innerHTML = "";

  const animais = JSON.parse(localStorage.getItem("animais")) || [];

  if (animais.length === 0) {
    container.innerHTML = "<p>Nenhum animal cadastrado.</p>";
    return;
  }

  animais.forEach((animal) => {
    const div = document.createElement("div");
    div.className = "animal";
    div.innerHTML = `<strong>Animal: ${animal.nome}</strong><br>Espécie: ${animal.especie}
    <strong><br>Idade: ${animal.idade}<strong><br>Habitat: ${animal.habitat}`;
    container.appendChild(div);
  });
}

window.addEventListener("DOMContentLoaded", listarAnimais);
