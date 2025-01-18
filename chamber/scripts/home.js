document.querySelector("#lastModified").textContent = document.lastModified;

const hamburgr = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburgr.addEventListener('click', () => {
    hamburgr.classList.toggle('open');
    navigation.classList.toggle('open');
});