function alterar() {
    const html = document.documentElement; 
    const botao = document.getElementById("botao");
  
    if (html.getAttribute("data-bs-theme") === "dark") {
      html.setAttribute("data-bs-theme", "light");
      botao.classList.remove("btn-outline-light");
      botao.classList.add("btn-outline-dark");
      botao.textContent = "Modo Escuro";
    } else {
      html.setAttribute("data-bs-theme", "dark");
      botao.classList.remove("btn-outline-dark");
      botao.classList.add("btn-outline-light");
      botao.textContent = "Modo Claro";
    }
  }
  