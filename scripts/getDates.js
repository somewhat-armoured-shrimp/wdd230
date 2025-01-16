const date = new Date().getFullYear();
document.querySelector("#currentYear").textContent = date;

document.querySelector("#lastModified").textContent = document.lastModified;

const cheeseBurger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

cheeseBurger.addEventListener('click', () => {
    cheeseBurger.classList.toggle('open');
    navigation.classList.toggle('open');
});

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
const listItems = document.querySelectorAll('li');
const listLinks = document.querySelectorAll('.aLink');
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
        
        listItems.forEach((li) => {
            li.style.color = '#00042e';
            li.style.transition = '0.3s';
        });

        listLinks.forEach((a) => {
            a.style.color = '#a80833';
            a.style.transition = '0.3s';
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
        
        listItems.forEach((li) => {
            li.style.color = '#fff';
        });

        listLinks.forEach((a) => {
            a.style.color = '#f97b7b';
        });

        visits.style.color = '#f97b7b';
        
        footer.style.background = '#00011d';

        modeButton.style.color = '#fff';
		modeButton.textContent = '◐';
	}
});
