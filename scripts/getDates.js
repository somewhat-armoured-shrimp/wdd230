const date = new Date().getFullYear();
document.querySelector("#currentYear").textContent = date;

document.querySelector("#lastModified").textContent = document.lastModified;

const cheeseBurger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

cheeseBurger.addEventListener('click', () => {
    cheeseBurger.classList.toggle('open');
    navigation.classList.toggle('open');
});
    
// le queryselector
const siteVisits = document.querySelector('#siteVisits');

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    siteVisits.textContent = numVisits;
} else {
    siteVisits.textContent = `💀 0`;
}
// go up by ONE
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


/////// WEATHER SECTION ///////

const graphic = document.querySelector('#graphic');
const description = document.querySelector('#description');
const temp = document.querySelector('#temp');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.66&lon=-117.42&appid=031dfdd54bbcc6d19831160030dce525&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const graphicsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    graphic.setAttribute('src', graphicsrc);
    graphic.setAttribute('alt', desc);
    description.textContent = `${desc}.`;
}

apiFetch();


// ;;;; uhhhh im just assuming this is what i do
// i mean i can't do hover-ness which makes me sad dsodn sifnisnfids nf
// but like,,,, i don't know how far i was supposed to go with this
const modeButton = document.querySelector('#lightButton');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const h1 = document.querySelector('h1');
const h2s = document.querySelectorAll('h2');
const main = document.querySelector('main');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');

const visits = document.querySelector('#siteVisits');

modeButton.addEventListener('click', () => {
    // if the button looks like this,
    if (modeButton.textContent.includes('◐')) {
        // clicking it will result in:
        // LIGHT MODE //
        header.style.background = '#00042e';
        header.style.transition = '0.3s';

        nav.style.background = '#00042e';
        nav.style.transition = '0.3s';

        h1.style.color = '#00042e';
        h1.style.transition = '0.3s';

        h2s.forEach((h2) => {
            h2.style.color = '#00042e';
            h2.style.transition = '0.3s';
        });

		main.style.background = '#eee';
		main.style.color = '#00011d';
        main.style.transition = '0.3s';

        sections.forEach((section) => {
            section.style.color = '#00042e';
            section.style.background = '#fff';
            section.style.border = '2px solid #f97b7b';
            section.style.transition = '0.3s';
        });

        visits.style.color = '#a80833';
        visits.style.transition = '0.3s';

        footer.style.background = '#00042e';
        footer.style.transition = '0.3s';

        // and then the icon will become smth else (specifically, 
        // NOT the previous icon, so we can then click for the 
        // conditions stated in the 'else' statement, im pretty sure.)
        modeButton.style.color = '#f97b7b';
		modeButton.textContent = '◑';
        modeButton.style.transition = '0.3s';
	} else {
        // DARK MODE //
        header.style.background = '#00011d';
        nav.style.background = '#00011d';

        h1.style.color = '#fff';
        
        h2s.forEach((h2) => {
            h2.style.color = '#fff';
        });
        
		main.style.background = '#00042e';
		main.style.color = '#fff';

        sections.forEach((section) => {
            section.style.color = '#fff';
            section.style.background = '#040838';
            section.style.border = '2px solid rgba(57, 227, 233, 0.5)';
        });

        visits.style.color = '#f97b7b';
        
        footer.style.background = '#00011d';

        modeButton.style.color = '#fff';
		modeButton.textContent = '◐';
	}
});


