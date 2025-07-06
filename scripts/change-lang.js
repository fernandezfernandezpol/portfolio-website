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

function fetchTranslations(lang) {
    const path = window.location.pathname;
    const isInPages = path.startsWith('/pages/');
    const pathPrefix = isInPages ? '../locales/' : './locales/';

    return fetch(`${pathPrefix}${lang}.json`)
        .then(res => {
            if (!res.ok) throw new Error(`No se pudo cargar ${pathPrefix}${lang}.json`);
            return res.json();
        });
}

function translateAll(lang) {
    fetchTranslations(lang).then(data => {
        translationsCache[lang] = data;
        const page = getPageKey();
        if (data[page]) applyTranslations(data[page]);
        if (data.sidebar) applyTranslations(data.sidebar, 'sidebar');
        if (data.footer) applyTranslations(data.footer, 'footer');
        if (data.title) document.title = data.title;

        updateMarkdownFiles(lang);
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
    const mdFiles = {
        nanosatlab: {
            es: "../content/es/nanosatlab-es.md",
            cat: "../content/cat/nanosatlab-cat.md",
            en: "../content/en/nanosatlab-en.md",
        },
        profesor: {
            es: "../content/es/profesor-particular-es.md",
            cat: "../content/cat/profesor-particular-cat.md",
            en: "../content/en/profesor-particular-en.md",
        },
        mercadona: {
            es: "../content/es/mercadona-es.md",
            cat: "../content/cat/mercadona-cat.md",
            en: "../content/en/mercadona-en.md",
        },
        euroavia: {
            es: "../content/es/euroavia-es.md",
            cat: "../content/cat/euroavia-cat.md",
            en: "../content/en/euroavia-en.md",
        },
        'portfolio-website': {
            es: "../content/es/portfolio-website-es.md",
            cat: "../content/cat/portfolio-website-cat.md",
            en: "../content/en/portfolio-website-en.md",
        },
        'matlab-gui-musical-note-detector': {
            es: "../content/es/matlab-gui-musical-note-detector-es.md",
            cat: "../content/cat/matlab-gui-musical-note-detector-cat.md",
            en: "../content/en/matlab-gui-musical-note-detector-en.md",
        },
        'python-embedded-web-chat-analyzer': {
            es: "../content/es/python-embedded-web-chat-analyzer-es.md",
            cat: "../content/cat/python-embedded-web-chat-analyzer-cat.md",
            en: "../content/en/python-embedded-web-chat-analyzer-en.md",
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