function converter() {
  const valor = parseFloat(document.getElementById("temperatura").value);
  const unidade = document.getElementById("unidade").value;
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultadoDiv.innerText = "Por favor, insira um número válido.";
    resultadoDiv.classList.remove("d-none", "alert-success");
    resultadoDiv.classList.add("alert-danger");
    return;
  }

  let resultado = "";

  if (unidade === "fahrenheit") {
    resultado = ((valor * 9) / 5 + 32).toFixed(2) + " °F";
  } else {
    resultado = (((valor - 32) * 5) / 9).toFixed(2) + " °C";
  }

  resultadoDiv.innerText = `Resultado: ${resultado}`;
  resultadoDiv.classList.remove("d-none", "alert-danger");
  resultadoDiv.classList.add("alert-success");
}
