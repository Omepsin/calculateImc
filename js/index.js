function start() {
  document
    .querySelector("#button-calculate-imc")
    .addEventListener("click", handleButtonClick);

  document
    .querySelector("#input-weight")
    .addEventListener("input", handleButtonClick);
  document
    .querySelector("#input-height")
    .addEventListener("input", handleButtonClick);
}

function calculateImc(p, h) {
  const resultImc = p / (h * h);

  if (resultImc < 18.5) return { resultImc, classificacao: "Abaixo do peso" };
  else if (resultImc >= 18.5 && resultImc < 25)
    return { resultImc, classificacao: "Peso normal" };
  else if (resultImc >= 25 && resultImc < 30)
    return { resultImc, classificacao: "Excesso de peso" };
  else if (resultImc >= 30 && resultImc < 35)
    return { resultImc, classificacao: "Obesidade I" };
  else if (resultImc >= 35 && resultImc < 40)
    return { resultImc, classificacao: "Obesidade II" };
  else if (resultImc >= 40)
    return { resultImc, classificacao: "Obesidade III" };
}

function handleButtonClick() {
  const imc = calculateImc(
    Number(document.querySelector("#input-weight").value),
    Number(document.querySelector("#input-height").value)
  ).resultImc;

  const classificacao = calculateImc(
    Number(document.querySelector("#input-weight").value),
    Number(document.querySelector("#input-height").value)
  ).classificacao;

  document.querySelector("#imc").textContent = imc.toFixed(2).replace(".", ",");
  document.querySelector("#classificacao").textContent = classificacao;
}

start();
