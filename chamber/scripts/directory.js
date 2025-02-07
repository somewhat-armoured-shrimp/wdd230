// idk what this is or why this is
// const baseURL = 'https://somewhat-armoured-shrimp.github.io/wdd230/';
const membersURL = 'https://somewhat-armoured-shrimp.github.io/wdd230/chamber/data/members.json';
const cardsGrid = document.querySelector('.cards-grid');

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
    displayMemberCards(data.companies);
}

const displayMemberCards = (companies) => {
    companies.forEach((company) => {
        const card = document.createElement('section');
        const companyName = document.createElement('h2');
        const companyLogo = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const membershipLevel = document.createElement('p');
        const siteLink = document.createElement('a');

        companyName.textContent = `${company.name}`;
        companyLogo.textContent = `${company.icon}`;
        membershipLevel.textContent = `${company.membershipLevel}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        siteLink.textContent = `${company.siteURL}`;

        companyLogo.setAttribute('src', `${company.icon}`);
        companyLogo.setAttribute('alt', `${company.companyName} Logo`);
        companyLogo.setAttribute('width', '240');
        companyLogo.setAttribute('height', '120');
        siteLink.setAttribute('href', `${company.siteURL}`);

        card.appendChild(companyName);
        card.appendChild(companyLogo);
        card.appendChild(address);
        card.appendChild(membershipLevel);
        card.appendChild(phone);
        card.appendChild(siteLink);

        cardsGrid.appendChild(card);
    });
}

getMembers();