const link = document.querySelector('.clickDescription');
const buttonOk = document.querySelector('.buttonOk');
const button_buy = document.querySelector('.button_buy');
const buttonConfirm = document.querySelector('.buttonConfirm');

link.addEventListener('click', () => {
    document.querySelector('.containerDescription').style.display = 'block';
});

buttonOk.addEventListener('click', () => {
    document.querySelector('.containerDescription').style.display = 'none';    
});

button_buy.addEventListener('click', () => {
    document.querySelector('.containerBuy').style.display = 'block';
});

buttonConfirm.addEventListener('click', () => {
    document.querySelector('.containerBuy').style.display = 'none';
});