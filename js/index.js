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
  return p / (h * h);
}

function handleButtonClick() {
  const imc = calculateImc(
    Number(document.querySelector("#input-weight").value),
    Number(document.querySelector("#input-height").value)
  );

  document.querySelector("#imc").textContent = imc.toFixed(2).replace(".", ",");
}

start();
