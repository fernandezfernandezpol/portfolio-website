export function initHeader(config) {
    const path = window.location.pathname.split('/').pop();
    const prefix = (path !== 'index.html' && path !== '') ? '../' : './';

    const headerLogo = document.getElementById('header-logo');
    if (headerLogo) {
        headerLogo.src = config && config.logo ? config.logo : `${prefix}images/logo-index.png`;
    }

    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
            menuToggle.classList.toggle('hide');
        });
    }

    if (closeSidebarBtn && sidebar && menuToggle) {
        closeSidebarBtn.addEventListener('click', function() {
            sidebar.classList.remove('show');
            setTimeout(() => {
                menuToggle.classList.remove('hide');
            }, 150);
        });
    }

    if (sidebar && menuToggle) {
        document.querySelectorAll('#sidebar a').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('show');
                menuToggle.classList.remove('hide');
            });
        });
    }

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add('header-small');
            } else {
                header.classList.remove('header-small');
            }
        }
    });

    if (sidebar && menuToggle) {
        document.addEventListener('mousedown', function(event) {
            if (
                sidebar.classList.contains('show') &&
                !sidebar.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                sidebar.classList.remove('show');
                menuToggle.classList.remove('hide');
            }
        });
    }
}