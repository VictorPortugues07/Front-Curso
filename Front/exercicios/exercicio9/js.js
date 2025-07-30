const produtos = [
  {
    id: 1,
    nome: "Notebook Dell",
    categoria: "eletronicos",
    preco: 3500,
    imagem: "img/dell.png",
  },
  {
    id: 2,
    nome: "Camisa Polo",
    categoria: "roupas",
    preco: 89,
    imagem: "img/gola.jpg",
  },
  {
    id: 3,
    nome: "Livro de JavaScript",
    categoria: "livros",
    preco: 45,
    imagem: "img/livro.jpg",
  },
  {
    id: 4,
    nome: "Smartphone Samsung",
    categoria: "eletronicos",
    preco: 2200,
    imagem: "img/celular.webp",
  },
  {
    id: 5,
    nome: "Calça Jeans",
    categoria: "roupas",
    preco: 120,
    imagem: "img/calça.jpg",
  },
];

function renderizarProdutos(lista) {
  const container = document.getElementById("produtos-container");
  container.innerHTML = "";

  lista.forEach((produto) => {
    const card = `
      <div class="col-sm-6 col-lg-4">
        <div class="card border-0 bg-secondary bg-gradient shadow-lg rounded-4 overflow-hidden card-hover h-100">
          <img src="${
            produto.imagem
          }" class="card-img-top object-fit-cover" height="200" alt="${
      produto.nome
    }" />
          <div class="card-body text-white d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title fw-semibold">${produto.nome}</h5>
              <span class="badge bg-dark text-uppercase">${
                produto.categoria
              }</span>
            </div>
            <p class="mt-3 fs-5">R$ ${produto.preco.toFixed(2)}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function filtrarProdutos(categoria) {
  const lista =
    categoria === "todos"
      ? produtos
      : produtos.filter((p) => p.categoria === categoria);
  renderizarProdutos(lista);
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos(produtos);
});
