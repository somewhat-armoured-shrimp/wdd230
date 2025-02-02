document.querySelector("#lastModified").textContent = document.lastModified;

const hamburgr = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburgr.addEventListener('click', () => {
    hamburgr.classList.toggle('open');
    navigation.classList.toggle('open');
});

// dude i need to take a class for just javascript. not because
// i like it but because worrying about html and css at the same time is
// just not working out, man.

const visits = document.querySelector('#visits');

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
    visits.textContent = `Welcome! Let us know if you have any questions.`;
} else {
    visits.textContent = `Why are you here more than once. I'm flattered but why`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);