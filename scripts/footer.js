export function initFooter() {
    const path = window.location.pathname.split('/').pop();
    if (path === 'contact.html') {
        const footerRight = document.querySelector('.footer-right');
        if (footerRight) {
            const link = footerRight.querySelector('a[href*="contact.html"]');
            if (link) {
                link.href = '../index.html';
                link.textContent = 'Inicio';
            }
        }
    }
    else if (path === 'about-me.html') {
        const footerRight = document.querySelector('.footer-right');
        if (footerRight) {
            const link = footerRight.querySelector('a[href*="contact.html"]');
            if (link) {
                link.href = '../index.html';
                link.textContent = 'Inicio';
            }
        }
        const footerRight2 = document.querySelector('.footer-right');
        if (footerRight2) {
            const link = footerRight2.querySelector('a[href*="about-me.html"]');
            if (link) {
                link.href = '../pages/contact.html';
                link.textContent = 'Contacto';
            }
        }
    }
    else if (path === 'attributions.html') {
        const footerRight = document.querySelector('.footer-right');
        if (footerRight) {
            const link = footerRight.querySelector('a[href*="contact.html"]');
            if (link) {
                link.href = '../index.html';
                link.textContent = 'Inicio';
            }
        }
        const footerRight2 = document.querySelector('.footer-right');
        if (footerRight2) {
            const link = footerRight2.querySelector('a[href*="about-me.html"]');
            if (link) {
                link.href = '../pages/contact.html';
                link.textContent = 'Contacto';
            }
        }
    }
}