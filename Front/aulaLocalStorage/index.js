/*localStorage.setItem("nome","Victor");

const nomeGuardado = localStorage.getItem("nome");
console.log(nomeGuardado)

localStorage.removeItem("nome")
const nomeRemovido = localStorage.getItem("nome");
console.log(nomeRemovido)

localStorage.clear();
const nomeLimpo = localStorage.get("nome");
console.log(nomeLimpo)*/

document.getElementById("form-cliente").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const novoCliente = {nome, email};

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.push(novoCliente);
    localStorage.setItem("cliente", JSON.stringify(clientes));

    document.getElementById("form-cliente").reset;
    listarClientes();
    
    });


    function listarClientes() {
        const container = document.getElementById("lista-clientes");
        container.innerHTML = "<p>Nenhum cliente cadastrado</p>";
        return;

    const clientes = JSON.parse(localStorage.getItem("cliente")) || [];
    if (clientes.length === 0) {
        container.innerHTML = "<p>Nenhum cliente cadastrado</p>";
        return;    
    }
        clientes.forEach((clientes) => {
        const div = document.createElement("div");
        div.className = "cliente";
        div.innerHTML = `<strong>Nome:</strong> ${clientes.nome} <br> <strong>Email:</strong> ${clientes.email}`;
        container.appendChild(div);
    })
}

window.addEventListener("DOMContentLoaded", listarClientes);

    
