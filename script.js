const buttonHeader = document.getElementById('button-header');
const emailHeader = document.getElementById('email-header');
const passwordHeader = document.getElementById('password-header');

buttonHeader.addEventListener('click', logAlert())

function logAlert() {
    if (emailHeader.value === 'tryber@teste.com' && passwordHeader.value === '123456') {
        alert('Olá, Tryber!')
    } else {
        alert('Email ou senha inválidos.')
    }
}