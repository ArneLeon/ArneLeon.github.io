let lightmode = localStorage.getItem('lightmode');
let skills = localStorage.getItem('skills');

const enableLightmode = () => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
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


// Language Switch
let language = localStorage.getItem('language');
let germanText = document.querySelectorAll('#germanText');
let englishText = document.querySelectorAll('#englishText');

const enableEnglish = () => {
    germanText.forEach(text => {text.style.display = 'none'});
    englishText.forEach(text => {text.style.display = 'block'});
    localStorage.setItem('language', 'english');
}

const disableEnglish = () => {
    germanText.forEach(text => {text.style.display = 'block'});
    englishText.forEach(text => {text.style.display = 'none'});
    localStorage.setItem('language', 'german');
}

if (language === 'english') {
    document.querySelector('#language').value = "english";
    enableEnglish();
}

function switchLanguage() {
    language = localStorage.getItem('language');
    if (language !== 'english') {
        enableEnglish();
    } else {
        disableEnglish();
    }
}