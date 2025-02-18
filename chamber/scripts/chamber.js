document.querySelector("#lastModified").textContent = document.lastModified;

const hamburgr = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const banner = document.querySelector('#banner');
const bannerX = document.querySelector('#banner-x');

hamburgr.addEventListener('click', () => {
    hamburgr.classList.toggle('open');
    navigation.classList.toggle('open');
});

bannerX.addEventListener('click', () => {
    banner.classList.add('closed');
});

// idk man seems good
const today = new Date();

if (today.getDay() === 4 || today.getDay() === 5 || today.getDay() === 6 || today.getDay() === 0) {
    banner.classList.add('closed');
}

const weatherIcon = document.querySelector('#weather-emoji');
const temp = document.querySelector('#temperature');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');

const forecast = document.querySelector('#forecast');

const currentURL = 'https://api.openweathermap.org/data/2.5/weather?lat=47.66&lon=-117.42&appid=031dfdd54bbcc6d19831160030dce525&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.66&lon=-117.42&appid=031dfdd54bbcc6d19831160030dce525&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(currentURL);
        const forecastResponse = await fetch(forecastURL);
        if (response.ok && forecastResponse.ok) {
            const data = await response.json();
            const forecastData = await forecastResponse.json();
            // console.log(data);
            // console.log(forecastData);

            displayResults(data);
            displayForecast(forecastData);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    description.textContent = desc;
    humidity.textContent = `humidity: ${data.main.humidity}%`;
}

// actual insanity
function displayForecast(forecastData) {
    // flaviocopes "how to get tomorrow date javascript" sorry bro.
    // make new date object (gets now time but just wait ok)
    const tomorrow = new Date();
    // now its tomorrow. 24 hours in the future i believe but that's not sufficent
    tomorrow.setDate(tomorrow.getDate() + 1);
    // set tomorrow's hours to the VERY beginning of that day at 00:00:00
    tomorrow.setHours(0, 0, 0, 0);
    // get tomorrow as a UTC/Unix timestamp so it's actually workable
    const tomorrowDT = Math.floor((tomorrow).getTime() / 1000);

    // actually forgot about filter. :( only wants dt records greater than or equal 
    // to the new tomorrow timestamp
    const filteredDT = forecastData.list.filter((record) => record.dt >= tomorrowDT);

    const days = [];

    // listen man okay each day starts at 4AM PST alright it's either this or 
    // overlapping data ive already spent two days on this forecast aight
    const day1 = filteredDT.slice(1, 9);
    const day2 = filteredDT.slice(9, 17);
    const day3 = filteredDT.slice(17, 25);

    days.push(day1);
    days.push(day2);
    days.push(day3);

    days.forEach(day => {
        // all dad had to show me was Math.min(...[1,2,3]) getting the same result 
        // as Math.min(1, 2, 3) for me to 👍 
        const tempMin = Math.min(...day.map(record => record.main.temp_min));
        const tempMax = Math.max(...day.map(record => record.main.temp_max));

        const div = document.createElement('div');
        const icons = document.createElement('img');
        const maxmin = document.createElement('p');

        const iconsrc = `https://openweathermap.org/img/w/${day[4].weather[0].icon}.png`;
        maxmin.innerHTML = `<span id="max">${tempMax}</span>&#xB0; ${tempMin}&#xB0;`;

        icons.setAttribute('src', iconsrc);
        icons.setAttribute('alt', day[4].weather[0].main);
        div.classList.add('forecast-tings');

        div.appendChild(icons);
        div.appendChild(maxmin);
        forecast.appendChild(div);
    });

    // console.log(days);
}



// id kjus t do the thing again??
const spotlight = document.querySelector('.spotlight');
const membersURL = 'https://somewhat-armoured-shrimp.github.io/wdd230/chamber/data/members.json';

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
    displayRandomSpotlight(data.companies);

}

const displayRandomSpotlight = (companies) => {
    const topMembers = [];
    companies.forEach(company => {
        if (company.membershipLevel !== 'Nonprofit' && company.membershipLevel !== 'Bronze') {
            topMembers.push(company);
        }
    });

    shuffle(topMembers);

    const displayedMembers = [];
    displayedMembers.push(topMembers[0]);
    displayedMembers.push(topMembers[1]);

    displayedMembers.forEach(member => {
        const box = document.createElement('div');
        const memberName = document.createElement('h3');
        const companyLogo = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const siteLink = document.createElement('a');

        memberName.textContent = `${member.name}`;
        companyLogo.textContent = `${member.icon}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        siteLink.textContent = `${member.siteURL}`;

        companyLogo.setAttribute('src', `${member.icon}`);
        companyLogo.setAttribute('alt', `${member.companyName} Logo`);
        siteLink.setAttribute('href', `${member.siteURL}`);

        box.appendChild(memberName);
        box.appendChild(companyLogo);
        box.appendChild(address);
        box.appendChild(phone);
        box.appendChild(siteLink);
        
        spotlight.appendChild(box);
        
    });

}

// no shuffle method in javascript very sad 
function shuffle(companies) {
    let currentIndex = companies.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [companies[currentIndex], companies[randomIndex]] = [
            companies[randomIndex], companies[currentIndex]];
    }
}

apiFetch();
getMembers();

// maybe javascript is alright 