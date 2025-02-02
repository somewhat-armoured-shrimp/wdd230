// sigh
const formLoaded = document.querySelector('#timestamp');

const currentDateTime = new Date();

formLoaded.value = currentDateTime;

console.log(document.getElementById("timestamp").value);