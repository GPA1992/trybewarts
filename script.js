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
