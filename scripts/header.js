export function initHeader(config) {
    document.getElementById('header-logo').src = config.logo;

    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        menuToggle.classList.toggle('hide');
    });

    closeSidebarBtn.addEventListener('click', function() {
        sidebar.classList.remove('show');
        setTimeout(() => {
            menuToggle.classList.remove('hide');
        }, 150);
    });

    document.querySelectorAll('#sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('show');
            menuToggle.classList.remove('hide');
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 40) {
            header.classList.add('header-small');
        } else {
            header.classList.remove('header-small');
        }
    });

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