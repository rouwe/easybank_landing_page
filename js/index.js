// Menu
/* Toggle Menu
 * 
*/
const headerNav = document.getElementById('header-nav');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
openMenu.addEventListener("click", openMainMenu);
closeMenu.addEventListener("click", closeMainMenu);

function openMainMenu() {
    // Open main menu
    headerNav.style.display = 'block';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
}
function closeMainMenu() {
    // Close main menu
    headerNav.style.display = 'none';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
}