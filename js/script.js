// Toggel class active => adalah yg tadinya ada jdi ga ada yang tadinya gaada jadi ada
const navbarNav = document.querySelector('.navbar-nav');
// ketika humburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// clik di luar sidebar untuk menghilangkan sidebarnya
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});