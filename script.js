const form = document.querySelector('form');
form.addEventListener('submit', insertNew)
const texts = [];



function getTextInput(event) {
  const text = event.querySelector('#task').value;
  return text ? text : alert('Tarefas vazias não são permitidas')
}


function insertNew(event) {
  event.preventDefault();
  const text = getTextInput(event.target);

  let verificador;
  if(!text) return;
  texts.map(val => {
    if(val === text) verificador = false
  })
  if(verificador === false){
    alert('Não é permitido tarefas iguais')
    return;
  };

  createNewTask(text) 
}

const createNewTask = (text) => {
  texts.push(text);
  const newLi = createNewLi();
  const newCheckbox = createNewCheckbox();
  const newSpan = createNewSpan(text);
  const newButton = createNewButton();

  newLi.appendChild(newCheckbox);
  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);
  
  showTheTask(newLi);
  addEventListenerButtons(newButton);
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

const createNewButton = () => {
  const button = document.createElement('button')
  button.textContent = 'Delete';
  return button;
}

const showTheTask = (newLi) => {
  const ul = document.querySelector('ul')
  ul.appendChild(newLi);
}

const addEventListenerButtons = (button) => {
  const buttons = document.querySelectorAll('li');
  buttons.forEach(el => {
    el.addEventListener('click', verififyClick)
  });
}

const verififyClick = (e) => {
  if(e.target.tagName === 'BUTTON'){ 
    revomeTask(e);
    return;
  }
} 

const revomeTask = (e) => {
  const ul = document.querySelector('ul');
  ul.removeChild(e.originalTarget.parentNode);
  const removedText = e.target.previousSibling.textContent
  texts.map((val, idx) => {
    if(val === removedText){
      texts.splice(idx, 1);
    }
  })
}

const arquivarTaks = () => {
  window.localStorage.setItem('lista', texts);
}

const abrirJanela = () => {
  const textLocal = window.localStorage.getItem('lista');
  if (textLocal === '') return
  const text = textLocal.split(',')

  text.map(val => {
    createNewTask(val)
  })
}

window.addEventListener('beforeunload', arquivarTaks);
abrirJanela();
