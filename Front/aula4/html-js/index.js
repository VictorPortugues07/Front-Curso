function saudacao() {
  console.log("Hello World");
  window.alert("Hello World");
}

function somar() {
  const num1 = Number(document.getElementById("primeiroNumero").value);
  const num2 = Number(document.getElementById("segundoNumero").value);
  alert(num1 + num2);
}
function multiplicar() {
  const num1 = Number(document.getElementById("primeiroNumero").value);
  const num2 = Number(document.getElementById("segundoNumero").value);
  alert(num1 * num2);
}
function dividir() {
  const num1 = Number(document.getElementById("primeiroNumero").value);
  const num2 = Number(document.getElementById("segundoNumero").value);
  alert(num1 / num2);
}
function subtrair() {
  const num1 = Number(document.getElementById("primeiroNumero").value);
  const num2 = Number(document.getElementById("segundoNumero").value);
  alert(num1 - num2);
}
