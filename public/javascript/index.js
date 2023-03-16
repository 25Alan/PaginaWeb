const buttonRegister = document.querySelector('#register');
const imgLogin = document.querySelector('#imgLogin');


buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#login').style.display = 'none';
    imgLogin.style.display = 'none';
    document.querySelector('#Register').style.display = 'flex';
});

import express from 'express';
const app = express();
import { join } from 'path';

app.use(express.static(join(__dirname, 'public')));

app.get('/autos', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});