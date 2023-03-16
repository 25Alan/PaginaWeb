const selectClient = document.querySelector('#selectClient');
const buttonConfirm = document.querySelector('#button');

selectClient.addEventListener('dblclick', () => {
    document.querySelector('#modClient').style.display = 'block'
});

buttonConfirm.addEventListener('click', () => {
    document.querySelector('#modClient').style.display = 'none'
});

const selectBike = document.querySelector('#clickDescription');
const buttonChange = document.querySelector('#buttonChangeBike');

selectBike.addEventListener('dblclick', () => {
    document.querySelector('#containerbikeAdmin').style.display = 'block';
});

buttonChange.addEventListener('click', () => {
    document.querySelector('#containerbikeAdmin').style.display = 'none';
});