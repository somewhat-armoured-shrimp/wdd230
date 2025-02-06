// color nonsense
const lightButton = document.querySelector('#lightButton');

const baseURL = 'https://somewhat-armoured-shrimp.github.io/wdd230/';
const linksURL = 'https://somewhat-armoured-shrimp.github.io/wdd230/data/links.json';

const ul = document.querySelector('#ul');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        console.log(week.links);

        const li = document.createElement('li');
        li.innerHTML = `${week.week}: `;

        ul.appendChild(li);

        // aw frick yeah foreach i love you, i love your index argument thank you
        week.links.forEach((link, index) => {
            if (index !== 0) {
                const line = document.createTextNode(' | ');
                li.appendChild(line);
            }
            const alink = document.createElement('a');

            alink.setAttribute('href', `${link.url}`);
            alink.classList.add('aLink');
            alink.innerHTML = `${link.title}`;

            li.appendChild(alink);
        });

        // because light mode was not WORKING anymorrreeeeeee but now it doessss
        // get FRICKED
        const listItems = document.querySelectorAll('li');
        const listLinks = document.querySelectorAll('.aLink');

        modeButton.addEventListener('click', () => {
            if (modeButton.textContent.includes('◐')) {
                listItems.forEach((li) => {
                    li.style.color = '#fff';
                });

                listLinks.forEach((a) => {
                    a.style.color = '#f97b7b';
                });
            } else {


                listItems.forEach((li) => {
                    li.style.color = '#00042e';
                    li.style.transition = '0.3s';
                });

                listLinks.forEach((a) => {
                    a.style.color = '#a80833';
                    a.style.transition = '0.3s';
                });

            }
        });



    });
}

getLinks();

