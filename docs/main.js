
window.addEventListener('load', function(){

    let themeElement = document.querySelector('html')
    let themeSwitch = document.querySelector('#palette-theme-switch');
    let themes = window.getComputedStyle(themeElement).getPropertyValue('--toggle-themes').trim().split(/\s*,\s*/)

    function initTheme() {
        let store = localStorage.getItem('theme')
        if (store) {
            setTheme(store)
        } 
    }

    function setTheme(name) {
        localStorage.setItem('theme', name)
        themeSwitch.setAttribute('theme' , name)
        themeElement.setAttribute('theme', name)
    }

    function toggleTheme() {
        let current = window.getComputedStyle(themeElement).getPropertyValue('--current-theme').trim()

        let index = themes.indexOf(current)
        
        if (index >= themes.length - 1) {
            index = 0
        } else {
            index += 1
        }
        setTheme(themes[index])
    };

    function resetTheme() {
        setTheme('default')
        localStorage.removeItem('theme')
    }

    initTheme()

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => resetTheme(), false);

    themeSwitch.addEventListener('click', e => toggleTheme(), false)

}, false);
