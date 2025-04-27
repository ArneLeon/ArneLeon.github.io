let lightmode = localStorage.getItem('lightmode');
let background = document.querySelector('.background');
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let earth = document.querySelector('.earth');
let landscape = document.querySelector('.landscape');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
    moon.setAttribute('id', 'spin');
    sun.setAttribute('id', 'spin');
    background.setAttribute('id', 'lightmode');
    earth.setAttribute('id', 'earthDay');
    landscape.setAttribute('id', 'landscapeDay');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
    moon.removeAttribute('id', 'spin');
    sun.removeAttribute('id', 'spin');
    background.removeAttribute('id', 'lightmode');
    earth.removeAttribute('id', 'earthDay');
    landscape.removeAttribute('id', 'landscapeDay');
};

if (lightmode === 'active') {
    enableLightmode();
};

function switchTheme() {
    lightmode = localStorage.getItem('lightmode');
    if (lightmode !== "active") {
        enableLightmode();
    } else {
        disableLightmode();
    }
};