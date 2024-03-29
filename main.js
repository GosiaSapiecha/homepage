 const firstName = 'Gosia';
 const age = 15;

 console.log(
    `cześć nazywam sie ${firstName} i mam ${age}`
    );

    const header = document.querySelector('.main-header--js');

header.innerHTML = `cześć nazywan sie ${firstName} i mam ${age}`

console.log(header);

const emptyParagraph = document.querySelector('.paragraph__second--js');

emptyParagraph.innerHTML = `Tekst napisany JavaScriptem`;

function greet(age, firstName) {
    console.log(
        `cześć nazywam sie ${firstName} i mam ${age}`
        );
}

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.paragraph__second--js', 'Witaj świecie'); 

createContent('.heading--js', 'Podmieniony tytuł'); 

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    isOperating: true,
    name: `Death Star`,
    levels: 357,
    population: 1000,
    isLightOn: true,
    commander: {
        name: 'Darth Vader',
        age: 44,
    }
}

const myProperty = 'name'

const showMeProperty = (myProperty) => {
    console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`)
}

showMeProperty('nieistnieje')

const humanOne = {
    name: 'Gosia',
    age: 15,
    address: {
        street: 'Warszawska',
        city: 'Siewierz',
    }
}

const humanTwo = {
    name: 'Martyna',
    age: 17,
    address: humanOne.address,
}

humanOne.age = 17;

console.log(humanOne);
console.log(humanTwo);