let lightmode = localStorage.getItem('lightmode');
let lightBackground = document.getElementById('lightmode');
let darkBackground = document.getElementById('darkmode');
let spinner = document.querySelector('.spinner');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
    spinner.setAttribute('id', 'spin');
    darkBackground.style.opacity = 0;
    lightBackground.style.opacity = 1;
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
    spinner.removeAttribute('id', 'spin');
    lightBackground.style.opacity = 0;
    darkBackground.style.opacity = 1;
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