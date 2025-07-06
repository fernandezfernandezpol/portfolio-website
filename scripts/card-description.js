export function setupCardsToggle() {
  document.querySelectorAll('.project-card, .company-card').forEach(card => {
    const extraDiv = card.querySelector('.project-extra, .company-extra');
    if (!extraDiv) return;

    let isLoaded = false;
    let isVisible = false;
    let cachedContent = '';
    let savedScrollY = 0;

    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' || e.target.closest('.project-badge, .company-badge')) return;

      if (extraDiv.getAttribute('data-loaded') === 'false') {
        isLoaded = false;
        cachedContent = '';
        extraDiv.setAttribute('data-loaded', 'true');
      }

      const mdPath = extraDiv.getAttribute('data-md');
      if (!isLoaded) {
        extraDiv.innerHTML = 'Cargando descripción...';
        fetch(mdPath)
          .then(res => res.text())
          .then(md => {
            cachedContent = marked.parse(md);
            extraDiv.innerHTML = cachedContent;
            isLoaded = true;
            isVisible = true;
            savedScrollY = window.scrollY;
          })
          .catch(() => {
            cachedContent = '<em>No se pudo cargar la descripción.</em>';
            extraDiv.innerHTML = cachedContent;
            isLoaded = true;
            isVisible = true;
            savedScrollY = window.scrollY;
          });
      } else {
        isVisible = !isVisible;
        if (isVisible) {
          extraDiv.innerHTML = cachedContent;
          savedScrollY = window.scrollY;
        } else {
          const i18nKey = extraDiv.querySelector('span[data-i18n]')?.getAttribute('data-i18n') || 'click-to-expand';
          const translated = document.querySelector(`span[data-i18n='${i18nKey}']`)?.innerText || 'Pulsa para desplegar descripción';
          extraDiv.innerHTML = `&#9662; <span data-i18n="${i18nKey}">${translated}</span> &#9662;`;
          window.scrollTo({ top: savedScrollY, behavior: 'smooth' });
        }
      }
    });
  });
}