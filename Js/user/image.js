const link = document.querySelector('.clickDescription');
const buttonOk = document.querySelector('.buttonOk');

link.addEventListener('click', () => {
    document.querySelector('.containerDescription').style.display = 'block';
});

buttonOk.addEventListener('click', () => {
    document.querySelector('.containerDescription').style.display = 'none';    
});