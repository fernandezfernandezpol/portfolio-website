const filename = window.location.pathname.split('/').pop();

import { includeHTML } from '../scripts/utils.js';
import { config } from '../scripts/config.js';
import { initSidebar } from '../scripts/sidebar.js';
import { initCarousel } from '../scripts/carousel.js';
import { initFooter } from '../scripts/footer.js';
import { setupCardsToggle } from '../scripts/card-description.js';
import { initLanguageSwitcher } from '../scripts/change-lang.js';

let fragmentsLoaded = 0;

function checkInit() {
    fragmentsLoaded++;
    if (fragmentsLoaded === 2) {
      initSidebar(config);
      initCarousel();
      setupCardsToggle();
      initLanguageSwitcher();
    }
}

if (filename !== 'index.html' && filename !== '') {
  includeHTML('include-header', '../pages/header.html', checkInit);
  includeHTML('include-sidebar', '../pages/sidebar.html', checkInit);
  includeHTML('include-footer', '../pages/footer.html', initFooter);
} else {
  includeHTML('include-header', './pages/header.html', checkInit);
  includeHTML('include-sidebar', './pages/sidebar.html', checkInit);
  includeHTML('include-footer', './pages/footer.html', initFooter);
}