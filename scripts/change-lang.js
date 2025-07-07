const languages = [
    { code: 'es', label: 'Español' },
    { code: 'cat', label: 'Català' },
    { code: 'en', label: 'English' }
];

let currentLang = localStorage.getItem('lang') || 'es';
let translationsCache = {};

function getPageKey() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    const page = filename.replace('.html', '') || 'index';
    return page;
}

function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
}

function applyTranslations(translationsObject, prefix = '') {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (prefix && !key.startsWith(prefix + '.')) return;
        const keyWithoutPrefix = prefix ? key.slice(prefix.length + 1) : key;
        const value = getNestedTranslation(translationsObject, keyWithoutPrefix);
        if (value) {
            el.innerHTML = value;
        }
    });
}

function getBasePath() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    
    if (path.includes('/pages/')) {
        return '../locales/';
    }
    else {
        return './locales/';
    }
}

function fetchTranslations(lang) {
    const pathPrefix = getBasePath();
    const fullPath = `${pathPrefix}${lang}.json`;
    
    console.log(`Intentando cargar: ${fullPath}`);
    
    return fetch(fullPath)
        .then(res => {
            if (!res.ok) {
                const alternativePath = `./locales/${lang}.json`;
                console.log(`Fallando a: ${alternativePath}`);
                return fetch(alternativePath);
            }
            return res;
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status} - No se pudo cargar ${fullPath}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error(`Error cargando traducción para ${lang}:`, error);
            throw error;
        });
}

function translateAll(lang) {
    fetchTranslations(lang)
        .then(data => {
            translationsCache[lang] = data;
            const page = getPageKey();
            if (data[page]) applyTranslations(data[page]);
            if (data.sidebar) applyTranslations(data.sidebar, 'sidebar');
            if (data.footer) applyTranslations(data.footer, 'footer');
            if (data.title) document.title = data.title;

            updateMarkdownFiles(lang);
        })
        .catch(error => {
            console.error('Error al traducir:', error);
            if (lang !== 'es') {
                console.log('Fallback al español');
                translateAll('es');
            }
        });
}

function loadLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    location.reload();
}

function renderLangButtons(currentLang) {
    const container = document.getElementById('lang-buttons-container');
    if (!container) return;
    container.innerHTML = '';
    languages
        .filter(lang => lang.code !== currentLang)
        .forEach(lang => {
            const btn = document.createElement('button');
            btn.className = 'lang-buttons';
            btn.textContent = lang.label;
            btn.setAttribute('data-set-lang', lang.code);
            btn.addEventListener('click', () => {
                loadLanguage(lang.code);
            });
            container.appendChild(btn);
        });
}

function updateMarkdownFiles(lang) {
    const basePath = getBasePath().replace('locales/', 'content/');
    
    const mdFiles = {
        nanosatlab: {
            es: `${basePath}es/nanosatlab-es.md`,
            cat: `${basePath}cat/nanosatlab-cat.md`,
            en: `${basePath}en/nanosatlab-en.md`,
        },
        profesor: {
            es: `${basePath}es/profesor-particular-es.md`,
            cat: `${basePath}cat/profesor-particular-cat.md`,
            en: `${basePath}en/profesor-particular-en.md`,
        },
        mercadona: {
            es: `${basePath}es/mercadona-es.md`,
            cat: `${basePath}cat/mercadona-cat.md`,
            en: `${basePath}en/mercadona-en.md`,
        },
        euroavia: {
            es: `${basePath}es/euroavia-es.md`,
            cat: `${basePath}cat/euroavia-cat.md`,
            en: `${basePath}en/euroavia-en.md`,
        },
        'portfolio-website': {
            es: `${basePath}es/portfolio-website-es.md`,
            cat: `${basePath}cat/portfolio-website-cat.md`,
            en: `${basePath}en/portfolio-website-en.md`,
        },
        'matlab-gui-musical-note-detector': {
            es: `${basePath}es/matlab-gui-musical-note-detector-es.md`,
            cat: `${basePath}cat/matlab-gui-musical-note-detector-cat.md`,
            en: `${basePath}en/matlab-gui-musical-note-detector-en.md`,
        },
        'python-embedded-web-chat-analyzer': {
            es: `${basePath}es/python-embedded-web-chat-analyzer-es.md`,
            cat: `${basePath}cat/python-embedded-web-chat-analyzer-cat.md`,
            en: `${basePath}en/python-embedded-web-chat-analyzer-en.md`,
        }
    };

    document.querySelectorAll('.company-extra').forEach(div => {
        if(div.dataset.md.includes("nanosatlab")) {
            div.dataset.md = mdFiles.nanosatlab[lang] || mdFiles.nanosatlab.es;
        }
        else if(div.dataset.md.includes("profesor-particular")) {
            div.dataset.md = mdFiles.profesor[lang] || mdFiles.profesor.es;
        }
        else if(div.dataset.md.includes("mercadona")) {
            div.dataset.md = mdFiles.mercadona[lang] || mdFiles.mercadona.es;
        }
        else if(div.dataset.md.includes("euroavia")) {
            div.dataset.md = mdFiles.euroavia[lang] || mdFiles.euroavia.es;
        }
        div.setAttribute('data-loaded', 'false');
        const span = div.querySelector('span[data-i18n="click-to-expand"]');
        if (span) {
            div.innerHTML = `&#9662; <span data-i18n="click-to-expand">${span.innerText}</span> &#9662;`;
        }
    });

    document.querySelectorAll('.project-extra').forEach(div => {
        if(div.dataset.md.includes("portfolio-website")) {
            div.dataset.md = mdFiles['portfolio-website'][lang] || mdFiles['portfolio-website'].es;
        }
        else if(div.dataset.md.includes("matlab-gui-musical-note-detector")) {
            div.dataset.md = mdFiles['matlab-gui-musical-note-detector'][lang] || mdFiles['matlab-gui-musical-note-detector'].es;
        }
        else if(div.dataset.md.includes("python-embedded-web-chat-analyzer")) {
            div.dataset.md = mdFiles['python-embedded-web-chat-analyzer'][lang] || mdFiles['python-embedded-web-chat-analyzer'].es;
        }
        div.setAttribute('data-loaded', 'false');
        const span = div.querySelector('span[data-i18n="toggle-description"]');
        if (span) {
            div.innerHTML = `&#9662; <span data-i18n="toggle-description">${span.innerText}</span> &#9662;`;
        }
    });
}

function loadMarkdown(div) {
    const mdPath = div.dataset.md;
    if (div.innerHTML.includes('Cargando descripción') || div.innerHTML.includes('No se pudo cargar') || div.innerHTML.includes('Prem per desplegar') || div.innerHTML.includes('Pulsa para desplegar') || div.innerHTML.includes('Click to expand')) {
        return;
    }
    div.innerHTML = 'Cargando descripción...';
    fetch(mdPath)
        .then(res => res.text())
        .then(md => {
            div.innerHTML = marked.parse(md);
        })
        .catch(() => {
            div.innerHTML = '<em>No se pudo cargar la descripción.</em>';
        });
}

export function initLanguageSwitcher() {
    translateAll(currentLang);
    renderLangButtons(currentLang);
}