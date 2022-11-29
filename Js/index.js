const buttonRegister = document.querySelector('#register');

buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#login').style.display = 'none';
    document.querySelector('#Register').style.display = 'flex';
});