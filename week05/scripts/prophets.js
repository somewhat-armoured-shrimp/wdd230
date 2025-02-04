// define bozos
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    // response is fetched url
    const response = await fetch(url);
    // data is response but properly JSON-ed 
    const data = await response.json();
    // console.table(data.prophets);
    // data.prophets probably because the array in the link is called prophets.

    // now it's an argument in this function call. and this function 
    // expects an array parameter which is why it's not just 'data'
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    // use foreach loop with the array parameter to create and process each card
    // the same way. remember that foreach is UGLY and doesn't look like a  in JS
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        // i gotta have it look like the picture dawg
        let dob = document.createElement('p');
        let birthplace = document.createElement('p');
        
        // make sure to use prophet (singular) because we're acting like we're 
        // doing all this to one card. works like other foreach loops okay
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
                                // sick you can use template literals
        portrait.setAttribute('alt', `Portrait of ${prophet.fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '362');
        portrait.setAttribute('height', '447');
        
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}

getProphetData();