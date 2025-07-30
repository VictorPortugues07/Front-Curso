// Evento de envio do formulário de cadastro
document
  .getElementById("form-funcionarios")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Coleta dos dados dos inputs
    const nome = document.getElementById("nome").value.trim();
    const cargo = document.getElementById("cargo").value.trim();
    const departamento = document.getElementById("departamento").value.trim();
    const salario = document.getElementById("salario").value.trim();

    // Validação simples (poderia ser extraída para uma função reutilizável)
    if (!nome || !cargo || !departamento || !salario) {
      alert("Preencha todos os campos.");
      return;
    }

    // Criação de objeto com os dados do funcionário
    const novoFuncionario = { nome, cargo, departamento, salario };

    // Busca no localStorage e adiciona novo funcionário
    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    funcionarios.push(novoFuncionario);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

    // Limpa formulário e atualiza a lista exibida
    document.getElementById("form-funcionarios").reset();
    alert("Funcionário cadastrado com sucesso!");
    listarFuncionarios(); // Reutilização da função para atualização imediata
  });

// Função reutilizável para listar os funcionários cadastrados
function listarFuncionarios() {
  const container = document.getElementById("lista-funcionarios");
  container.innerHTML = "";

  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

  if (funcionarios.length === 0) {
    container.innerHTML = "<p>Nenhum funcionário cadastrado.</p>";
    return;
  }

  // Geração dinâmica da lista de funcionários
  funcionarios.forEach((funcionario) => {
    const div = document.createElement("div");
    div.className = "funcionario";
    div.innerHTML = `
      <p><strong>Nome:</strong> ${funcionario.nome}</p>
      <p><strong>Cargo:</strong> ${funcionario.cargo}</p>
      <p><strong>Departamento:</strong> ${funcionario.departamento}</p>
      <p><strong>Salário:</strong> ${funcionario.salario}</p>
      <hr />
    `;
    container.appendChild(div);
  });
}

// Inicializa a lista ao carregar a página
window.addEventListener("DOMContentLoaded", listarFuncionarios);
