export function initSidebar(config) {
    const path = window.location.pathname.split('/').pop();
    const prefix = (path !== 'index.html' && path !== '') ? '../' : './';

    const headerLogo = document.getElementById('header-logo');
    if (headerLogo) {
        headerLogo.src = config && config.logo ? config.logo : `${prefix}images/logo-index.png`;
    }
    const sidebarLogo = document.getElementById('sidebar-logo');
    if (sidebarLogo) {
        sidebarLogo.src = config && config.logo ? config.logo : `${prefix}images/logo.png`;
    }

    const linkMap = [
        { id: 'sidebar-inicio', href: `${prefix}index.html` },
        { id: 'sidebar-about', href: `${prefix}pages/about-me.html` },
        { id: 'sidebar-studies', href: `${prefix}pages/studies.html` },
        { id: 'sidebar-double-bachelors', href: `${prefix}pages/double-bachelors.html` },
        { id: 'sidebar-aerospace', href: `${prefix}pages/aerospace.html` },
        { id: 'sidebar-telecommunications', href: `${prefix}pages/telecommunications.html` },
        { id: 'sidebar-background', href: `${prefix}pages/background.html` },
        { id: 'sidebar-experience', href: `${prefix}pages/experience.html` },
        { id: 'sidebar-projects', href: `${prefix}pages/projects.html` },
        { id: 'sidebar-contact', href: `${prefix}pages/contact.html` }
    ];
    linkMap.forEach(l => {
        const el = document.getElementById(l.id);
        if (el) el.href = l.href;
    });

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

    if (sidebar) {
        document.querySelectorAll('#sidebar a').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('show');
                if (menuToggle) menuToggle.classList.remove('hide');
            });
        });
    }

    document.querySelectorAll('.submenu-toggle').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const parent = btn.closest('.sidebar-submenu');
            document.querySelectorAll('.sidebar-submenu.open').forEach(el => {
                if (el !== parent) el.classList.remove('open');
                const submenuToggle = el.querySelector('.submenu-toggle');
                if (submenuToggle) submenuToggle.classList.remove('open');
            });
            if (parent) {
                parent.classList.toggle('open');
                btn.classList.toggle('open');
            }
        });
    });

    document.addEventListener('click', function(e) {
        document.querySelectorAll('.sidebar-submenu.open').forEach(el => {
            if (!el.contains(e.target)) {
                el.classList.remove('open');
                const submenuToggle = el.querySelector('.submenu-toggle');
                if (submenuToggle) submenuToggle.classList.remove('open');
            }
        });
    });

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

    const descargarCV = document.getElementById('descargar-cv');
    if (descargarCV) {
        descargarCV.addEventListener('click', function() {
            const enlace = document.createElement('a');
            enlace.href = `${prefix}docs/blank-CV.pdf`;
            enlace.download = 'CV_POL_FERNANDEZ_FERNANDEZ.pdf';
            document.body.appendChild(enlace);
            enlace.click();
            document.body.removeChild(enlace);
        });
    }
}