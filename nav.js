// Mobile nav dropdown logic
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    function setMobileUI() {
        const isMobile = window.innerWidth <= 900;
        menuToggle.style.display = isMobile ? 'block' : 'none';
        navLinks.style.display = isMobile ? 'none' : 'flex';
        navLinks.style.opacity = '1';
        setFooterMobile();
    }
    menuToggle.addEventListener('click', () => {
        const isClosed = navLinks.style.display === 'none';
        navLinks.style.display = isClosed ? 'flex' : 'none';
        navLinks.style.background = isClosed ? 'rgba(23, 45, 79, 0.3)' : '';
        navLinks.style.opacity = '1';
        Array.from(navLinks.getElementsByTagName('a')).forEach(a => {
            a.style.opacity = '1';
            a.style.background = 'none';
        });
    });
    window.addEventListener('resize', setMobileUI);
    setMobileUI();
});

    // Mobile footer logic for matching menu bar style and behavior
    function setFooterMobile() {
        const footer = document.querySelector('footer');
        if (!footer) return;
        const isMobile = window.innerWidth <= 900;
            if (isMobile) {
                footer.style.position = 'fixed';
                footer.style.left = '50%';
                footer.style.transform = 'translateX(-50%)';
            footer.style.bottom = '1.2rem';
                footer.style.width = '98vw';
                footer.style.maxWidth = '98vw';
                footer.style.margin = '';
                footer.style.boxSizing = 'border-box';
                footer.style.background = '#172d4fff';
                footer.style.color = '#f2efeaff';
                footer.style.textAlign = 'center';
                footer.style.padding = '0.7rem 1.2rem';
            footer.style.borderRadius = '12px';
                footer.style.boxShadow = '0 -4px 16px rgba(44,62,80,0.12)';
                footer.style.zIndex = '100';
                footer.style.fontSize = '0.8rem';
                footer.style.transition = 'background 0.3s';
            } else {
                footer.style.position = '';
                footer.style.left = '';
                footer.style.transform = '';
                footer.style.bottom = '';
                footer.style.width = '';
                footer.style.maxWidth = '';
                footer.style.margin = '';
                footer.style.boxSizing = '';
                footer.style.background = '';
                footer.style.color = '';
                footer.style.textAlign = '';
                footer.style.padding = '';
                footer.style.borderRadius = '';
                footer.style.boxShadow = '';
                footer.style.zIndex = '';
                footer.style.fontSize = '';
                footer.style.transition = '';
            }
    }
    window.addEventListener('resize', setFooterMobile);
    document.addEventListener('DOMContentLoaded', setFooterMobile);
