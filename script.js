function loguinAlert() {
  const email = document.getElementById('loguin-email').value;
  const senha = document.getElementById('loguin-senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
document.getElementById('signin').addEventListener('click', loguinAlert);
//
function agreementCheck() {
  const checkBox = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');
  if (checkBox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
document.getElementById('agreement').addEventListener('click', agreementCheck);
//
function caractereCount() {
  const texto = document.getElementById('textarea');
  texto.addEventListener('keyup', () => {
    const count = texto.value.split('');
    const textCount = 500 - count.length;
    const maxCaractere = document.getElementById('counter');
    maxCaractere.innerText = textCount;
  });
}
caractereCount();
//
function storeName() {
  const nameValue = document.querySelector('#input-name').value;
  const lastNameValue = document.querySelector('#input-lastname').value;
  localStorage.setItem('name', `${nameValue} ${lastNameValue}`);
}
//
function storeEmail() {
  const emailValue = document.querySelector('#input-email').value;
  localStorage.setItem('email', emailValue);
}
//
function storeHouse() {
  const house = document.getElementById('house').value;
  localStorage.setItem('casa', house);
}
//
function getFamily() {
  const familyValue = document.getElementsByName('family');
  let familyCheck = '';
  for (let i = 0; i < familyValue.length; i += 1) {
    if (familyValue[i].checked === true) {
      familyCheck = familyValue[i].value;
    }
  }
  localStorage.setItem('familia', familyCheck);
}
//
function getContent() {
  const content = document.getElementsByClassName('subject');
  const contentCheck = [];
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked === true) {
      contentCheck.push(content[i].value);
    }
  }
  localStorage.setItem('conteudo', contentCheck.join(', '));
}
//
function getEvaluation() {
  const evaluation = document.getElementsByName('rate');
  let rate = '';
  for (let i = 0; i < evaluation.length; i += 1) {
    if (evaluation[i].checked === true) {
      rate = evaluation[i].value;
    }
  }
  localStorage.setItem('nota', rate);
}
//
function getObservation() {
  const text = document.getElementById('textarea').value;
  localStorage.setItem('observacao', text);
}
//
function newForm() {
  const form = document.getElementById('evaluation-form');
  form.innerHTML ='';
  const mainForm = document.getElementById('form');
  const formNew = document.createElement('form');
  formNew.id = 'form-data';
  mainForm.appendChild(formNew);
}
function formItemName() {
  const form = document.querySelector('#form-data');
  const nome = document.createElement('div');
  nome.innerText = `Nome: ${localStorage.getItem('name')}
  Email: ${localStorage.getItem('email')}
  Casa: ${localStorage.getItem('casa')}
  Família: ${localStorage.getItem('familia')}
  Matérias: ${localStorage.getItem('conteudo')}
  Avaliação: ${localStorage.getItem('nota')}
  Observações: ${localStorage.getItem('observacao')} `;
  form.appendChild(nome);
}
document.querySelector('#submit-btn').addEventListener('click', () => {
  localStorage.clear();
  storeName();
  storeEmail();
  storeHouse();
  getFamily();
  getContent();
  getEvaluation();
  getObservation();
  newForm();
  formItemName();
});
