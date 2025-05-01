let lightmode = localStorage.getItem('lightmode');
let skills = localStorage.getItem('skills');

if (lightmode === 'active') {
    enableLightmode();
};

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
};

function switchTheme() {
    lightmode = localStorage.getItem('lightmode');
    if (lightmode !== "active") {
        enableLightmode();
    } else {
        disableLightmode();
    }
};