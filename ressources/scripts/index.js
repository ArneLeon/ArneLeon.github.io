function switchLanguage(language) {
    if (document.querySelector('#german') === 'active') {
    document.querySelectorAll('#german').forEach(element => {element.style.display = 'none'});
    document.querySelectorAll('#english').forEach(element => {element.style.display = 'none'});
    document.querySelectorAll(language).forEach(element => {element.style.display = 'block'});
    }
}

function switchPanel(panel) {
    document.querySelectorAll('.projectsPanel').forEach(element => {element.style.display = 'none'});
    document.querySelectorAll('.aboutMePanel').forEach(element => {element.style.display = 'none'});
    document.querySelectorAll(panel).forEach(element => {element.style.display = 'block'});
}