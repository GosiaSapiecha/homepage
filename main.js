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