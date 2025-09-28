// page-transition.js
// Fade in and fade out page transitions
(function() {
    // Page transition animation
    function animatePageTransition(url) {
        document.body.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.opacity = '0';
        sessionStorage.setItem('pendingFadeIn', 'true');
        setTimeout(function() {
            window.location.href = url;
        }, 600);
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Animate nav link clicks
        Array.from(document.querySelectorAll('a')).forEach(function(link) {
            // Only animate internal links
            if (link.hostname === window.location.hostname && link.getAttribute('href') && !link.getAttribute('target')) {
                link.addEventListener('click', function(e) {
                    // Ignore anchor links and JS links
                    var href = link.getAttribute('href');
                    if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
                        e.preventDefault();
                        animatePageTransition(href);
                    }
                });
            }
        });
        // Animate Contact Us button on index
        var ctaBtn = document.querySelector('.cta-btn');
        if (ctaBtn && window.location.pathname.endsWith('index.html')) {
            ctaBtn.addEventListener('click', function(e) {
                e.preventDefault();
                animatePageTransition('contact.html');
            });
        }
    });

    // Fade in on page load with 2 second animation
    function fadeInBody() {
        var isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
        if (isIndex || sessionStorage.getItem('pendingFadeIn')) {
            document.body.style.transition = 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1)';
            setTimeout(function() {
                document.body.style.opacity = '1';
                sessionStorage.removeItem('pendingFadeIn');
            }, 50);
        } else {
            document.body.style.opacity = '1';
        }
    }
    document.addEventListener('DOMContentLoaded', fadeInBody);
    
    // Fade out and reload on popstate (back/forward navigation)
    window.addEventListener('popstate', function() {
        document.body.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.opacity = '0';
        sessionStorage.setItem('pendingFadeIn', 'true');
        setTimeout(function() {
            location.reload();
        }, 600);
    });
})();
