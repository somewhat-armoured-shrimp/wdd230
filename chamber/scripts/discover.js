const visits = document.querySelector('#visits');

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
    visits.textContent = `Welcome! Let us know if you have any questions.`;
} else {
    visits.textContent = `Why are you here more than once. I'm flattered but why`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);