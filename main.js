 const firstName = 'Gosia';
 const age = 15;

 console.log(
    `cześć nazywam sie ${firstName} i mam ${age}`
    );


const header = document.querySelector('.main-header--js');

header.innerHTML = `cześć nazywan sie ${firstName} i mam ${age}`

console.log(header);