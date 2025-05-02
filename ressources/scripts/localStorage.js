let lightmode = localStorage.getItem('lightmode');

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
};

const disableEnglish = () => {
    germanText.forEach(text => {text.style.display = 'block'});
    englishText.forEach(text => {text.style.display = 'none'});
    localStorage.setItem('language', 'german');
};

if (language === 'english') {
    document.querySelector('#language').value = "english";
    enableEnglish();
};

function switchLanguage() {
    language = localStorage.getItem('language');
    if (language !== 'english') {
        enableEnglish();
    } else {
        disableEnglish();
    }
};


// Skills buttons
let skills = localStorage.getItem('skills');
let skillsList = document.querySelectorAll('.skills input');
let projects = document.querySelectorAll('#projects a');
let stations = document.querySelectorAll('#aboutMe a');


function filterSkills() {
    let checkedList = document.querySelectorAll('.skills input:checked');
    if (checkedList) {
        let checkedIds = [];
        checkedList.forEach(skill => {
            checkedIds.push(skill.id);
        })
        localStorage.setItem('skills', checkedIds);


        let showedProjects = [];
        projects.forEach(project => {
            if (checkedIds.every(id => project.classList.contains(id))) {
                showedProjects.push(project);
            }
        })

        let showedStations = [];
        stations.forEach(station => {
            if (checkedIds.every(id => station.classList.contains(id))) {
                showedStations.push(station);
            }
        })

        projects.forEach(project => {
            project.style.display = 'none';
        })
        showedProjects.forEach(project => {
            project.style.display = 'block';
        })

        stations.forEach(station => {
            station.style.display = 'none';
        })
        showedStations.forEach(station => {
            station.style.display = 'block';
        })

    } else {
        projects.forEach(project => {
            project.style.display = 'block';
        })
        stations.forEach(station => {
            station.style.display = 'block';
        })
    }
}

