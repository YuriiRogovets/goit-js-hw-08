function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button");
const span = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", changeColor);

function changeColor(event) {
  const currentColor = getRandomHexColor();
  span.textContent = currentColor;
  body.style.backgroundColor = currentColor;
}


