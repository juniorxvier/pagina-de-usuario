function createUser() {
const nome = document.querySelector('#txt');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const button = document.querySelector('#button');
const form = document.querySelector('#form');

const userData = {
    nome: nome,
    email: email,
    senha: senha
};

// Armazena o objeto no Local Storage
localStorage.setItem('userData', JSON.stringify(userData));

// Exibe uma mensagem de sucesso
alert('Usuário criado com sucesso!');

// Limpa o formulário
document.querySelector('#form').reset();

}

localStorage.setItem('userData', JSON.stringify(userData));
