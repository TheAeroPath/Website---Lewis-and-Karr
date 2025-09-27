// Mobile nav dropdown logic
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    function checkMobile() {
        const isMobile = window.innerWidth <= 900;
        menuToggle.style.display = isMobile ? 'block' : 'none';
        navLinks.style.display = isMobile ? 'none' : 'flex';
        navLinks.style.opacity = '1';
    }
    menuToggle.addEventListener('click', () => {
        const isClosed = navLinks.style.display === 'none';
        navLinks.style.display = isClosed ? 'flex' : 'none';
        navLinks.style.opacity = isClosed ? '0.7' : '1';
    });
    window.addEventListener('resize', checkMobile);
    checkMobile();
});
