export function initFooter() {
    const path = window.location.pathname.split('/').pop();
    const prefix = (path !== 'index.html' && path !== '') ? '../' : './';

    const logoIndex = document.getElementById('footer-logo-index');
    if (logoIndex) logoIndex.src = `${prefix}images/logos/logo-index.png`;
    const logoAeros = document.getElementById('footer-logo-aeros');
    if (logoAeros) logoAeros.src = `${prefix}images/logos/logo-aeros.png`;
    const logoTelecos = document.getElementById('footer-logo-telecos');
    if (logoTelecos) logoTelecos.src = `${prefix}images/logos/logo-telecos.png`;

    const linkAttributions = document.getElementById('footer-attributions');
    if (linkAttributions) linkAttributions.href = `${prefix}pages/attributions.html`;
    const linkContact = document.getElementById('footer-contact');
    const linkAbout = document.getElementById('footer-about');

    if (path === 'contact.html') {
        if (linkContact) {
            linkContact.href = `${prefix}index.html`;
            linkContact.textContent = 'Inicio';
        }
    } else if (path === 'about-me.html' || path === 'attributions.html') {
        if (linkContact) {
            linkContact.href = `${prefix}index.html`;
            linkContact.textContent = 'Inicio';
        }
        if (linkAbout) {
            linkAbout.href = `${prefix}pages/contact.html`;
            linkAbout.textContent = 'Contacto';
        }
    } else {
        if (linkContact) {
            linkContact.href = `${prefix}pages/contact.html`;
            linkContact.textContent = 'Contacto';
        }
        if (linkAbout) {
            linkAbout.href = `${prefix}pages/about-me.html`;
            linkAbout.textContent = 'Sobre mí';
        }
    }
}