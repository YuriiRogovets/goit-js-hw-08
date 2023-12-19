function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxesDiv = document.querySelector(`#boxes`);

let amount;
createBtn.addEventListener(`click`, (event) => {
  if (1 <= input.value && input.value <= 100) {
    amount = input.value;
    createBoxes(amount);
    input.value = ``;
  }
});

function createBoxes(amount) {
  let box = ``;
  let size = 30;
  for (let i = 0; i < amount; i+=1) {
    box += `<div style= "background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
    size += 10;
  }  
  boxesDiv.innerHTML = box;
  box = ``;
}

destroyBtn.addEventListener(`click`, (event) => {
  destroyBoxes(event)
});

function destroyBoxes() {
boxesDiv.innerHTML = ``;
}

// Покращення:

// Пряма маніпуляція DOM: Ви зараз створюєте рядок HTML і використовуєте innerHTML, щоб вставити його в DOM. Хоча це працює, створення елементів за допомогою document.createElement, а потім їх додавання до DOM, як правило, вважається кращою практикою, оскільки це допомагає уникнути потенційних проблем безпеки (таких як атаки XSS) і, як правило, приводить до кращої продуктивності.

// Оптимізація обробника подій: Функцію обробника події destroyBoxes можна спростити, передавши destroyBoxes безпосередньо до методу addEventListener, не обгортаючи її іншою функцією.