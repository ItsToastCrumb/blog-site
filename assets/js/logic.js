//VARIABLE DECLARATIONS
const themeToggleEl = document.querySelector('#themeToggle');
const bodyEl = document.querySelector('body');

//Load current theme setting to window
let mode = 'dark';

//Light and Dark theme toggle
//Event listener to toggle the page theme upon user click
themeToggleEl.addEventListener('click', function(){
    if (mode === 'dark'){
        mode = 'light';
        bodyEl.setAttribute('class', 'light');
    } else {
        mode = 'dark';
        bodyEl.setAttribute('class', 'dark')
    }
    //Store current theme to local storage for future visits
})