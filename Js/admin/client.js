const selectClient = document.querySelector('#selectClient');
const buttonConfirm = document.querySelector('#button');

selectClient.addEventListener('dblclick', () => {
    document.querySelector('#modClient').style.display = 'block'
});

buttonConfirm.addEventListener('click', () => {
    document.querySelector('#modClient').style.display = 'none'
});