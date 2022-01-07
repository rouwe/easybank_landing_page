// Menu
/* Toggle Menu
 * 
*/
const headerNav = document.getElementById('header-nav');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const heroSection = document.getElementById('hero-section');
openMenu.addEventListener("click", openMainMenu);
closeMenu.addEventListener("click", closeMainMenu);

function openMainMenu() {
    // Open main menu
    headerNav.style.display = 'block';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    heroSection.classList.add('menu-open-bg');
}
function closeMainMenu() {
    // Close main menu
    headerNav.style.display = 'none';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    heroSection.classList.remove('menu-open-bg');
}