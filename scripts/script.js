function includeHTML(id, url, callback) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback();
      });
}

const page = window.location.pathname.split('/').pop().replace('.html', '');

const pageConfigs = {
    "aeroespace": {
        logo: "../images/logo-aeros.png",
        text: "Ingeniería Aeroespacial"
    },
    "background": {
        logo: "../images/logo-index.png",
    },
    "telecommunitacions": {
        logo: "../images/logo-telecos.png",
    }
};

const defaultConfig = {
    logo: "../images/logo-index.png"
};

const config = {
    ...defaultConfig,
    ...(pageConfigs[page] || {})
};

let fragmentsLoaded = 0;
function checkInit() {
    fragmentsLoaded++;
    if (fragmentsLoaded === 2) {
        document.getElementById('header-logo').src = config.logo;
        document.getElementById('sidebar-logo').src = config.logo;

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

        document.querySelectorAll('.submenu-toggle').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const parent = btn.closest('.sidebar-submenu');
                document.querySelectorAll('.sidebar-submenu.open').forEach(el => {
                    if (el !== parent) el.classList.remove('open');
                    el.querySelector('.submenu-toggle').classList.remove('open');
                });
                parent.classList.toggle('open');
                btn.classList.toggle('open');
            });
        });

        document.addEventListener('click', function(e) {
            document.querySelectorAll('.sidebar-submenu.open').forEach(el => {
                if (!el.contains(e.target)) {
                    el.classList.remove('open');
                    el.querySelector('.submenu-toggle').classList.remove('open');
                }
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
            const sidebar = document.getElementById('sidebar');
            const menuToggle = document.getElementById('menu-toggle');
            if (
                sidebar.classList.contains('show') &&
                !sidebar.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                sidebar.classList.remove('show');
                menuToggle.classList.remove('hide');
            }
        });

        document.getElementById('descargar-cv').addEventListener('click', function() {
            const enlace = document.createElement('a');
            enlace.href = '../docs/POL_FERNANDEZ_FERNANDEZ_CV_AIRBUS.pdf';
            enlace.download = 'CV_POL_FERNANDEZ_FERNANDEZ.pdf';
            document.body.appendChild(enlace);
            enlace.click();
            document.body.removeChild(enlace);
        });

        const track = document.querySelector('.carousel-track');
        if (track) {
            const slides = Array.from(track.children);
            const prevBtn = document.querySelector('.carousel-btn.prev');
            const nextBtn = document.querySelector('.carousel-btn.next');
            const indicatorsContainer = document.querySelector('.carousel-indicators');
            let current = 0;
            let interval = null;

            indicatorsContainer.innerHTML = "";
            slides.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot';
                if (idx === 0) dot.classList.add('active');
                dot.setAttribute('aria-label', `Ir a la diapositiva ${idx + 1}`);
                dot.addEventListener('click', () => {
                    showSlide(idx);
                    restartAuto();
                });
                indicatorsContainer.appendChild(dot);
            });
            const dots = Array.from(document.querySelectorAll('.carousel-dot'));

            function updateDots() {
                dots.forEach((dot, idx) => {
                    dot.classList.toggle('active', idx === current);
                });
            }

            function showSlide(idx) {
                current = (idx + slides.length) % slides.length;
                track.style.transform = `translateX(-${current * 100}%)`;
                updateDots();
            }

            function nextSlide() { showSlide(current + 1); }
            function prevSlide() { showSlide(current - 1); }

            nextBtn.addEventListener('click', () => { nextSlide(); restartAuto(); });
            prevBtn.addEventListener('click', () => { prevSlide(); restartAuto(); });

            function startAuto() {
                interval = setInterval(nextSlide, 4000);
            }
            function restartAuto() {
                clearInterval(interval);
                startAuto();
            }

            showSlide(0);
            startAuto();
        }
    }
}

includeHTML('include-header', '../pages/header.html', checkInit);
includeHTML('include-sidebar', '../pages/sidebar.html', checkInit);
includeHTML('include-footer', '../pages/footer.html', function() {
    const path = window.location.pathname.split('/').pop();
    if (path === 'contact.html') {
        const footerRight = document.querySelector('.footer-right');
        if (footerRight) {
            const link = footerRight.querySelector('a[href*="contact.html"]');
            if (link) {
                link.href = '../pages/index.html';
                link.textContent = 'Inicio';
            }
        }
    }
});