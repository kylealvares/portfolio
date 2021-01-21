const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mobile-menu');

var menu_open = false;

hamburger.addEventListener('click', () => {
    if (menu_open === false) {
        menu.style.display = 'block';
        // menu.ul.li.style.display = 'block';
    } else {
        menu.style.display = 'none'
            // menu.ul.li.style.display = 'none';
    }
    menu_open = !menu_open;
});

window.addEventListener('resize', () => {
    // let width = document.documentElement.clientWidth;
    menu.style.display = 'none'
    menu_open = false;
})