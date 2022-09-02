const form = document.querySelector('form');
form.addEventListener('submit', insertNew)

function getTextInput(event) {
  const text = event.querySelector('#task').value;
  return text ? text : alert('Tarefas vazias não são permitidas')
}

function insertNew(event) {
  event.preventDefault();
  const text = getTextInput(event.target);
  if(!text) return;

  const newLi = createNewLi();
  const newCheckbox = createNewCheckbox();
  const newSpan = createNewSpan(text);
  const newInput = createNewInput();
  const newButton = createNewButton();

  newLi.appendChild(newCheckbox);
  newLi.appendChild(newSpan);
  newLi.appendChild(newInput);
  newLi.appendChild(newButton);
  
  showTheTask(newLi);
}

const createNewLi = () => {
  return document.createElement('li');
}

const createNewCheckbox = () => {
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', 'checkbox');
  input.setAttribute('id', 'checkbox');
  return input;
}

const createNewSpan = (text) => {
  const span = document.createElement('span');
  span.textContent = text;
  span.classList.add('task-input');
  return span;
}

const createNewInput = () => {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'new-text');
  input.setAttribute('hidden', 'hidden');
  input.classList.add('task-input');
  return input;
}

const createNewButton = () => {
  const button = document.createElement('button')
  button.textContent = 'Delete';
  return button;
}

const showTheTask = (newLi) => {
  const ul = document.querySelector('ul')
  ul.appendChild(newLi);
}