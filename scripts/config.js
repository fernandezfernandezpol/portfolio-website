const filename = window.location.pathname.split('/').pop();
const prefix = (filename !== 'index.html' && filename !== '') ? '../' : './';

const page = filename.replace('.html', '');

const pageConfigs = {
    "aerospace": {
        logo: `${prefix}images/logos/logo-aeros.png`,
        text: "Ingeniería Aeroespacial"
    },
    "telecommunications": {
        logo: `${prefix}images/logos/logo-telecos.png`,
    }
};

const defaultConfig = {
    logo: `${prefix}images/logos/logo-index.png`
};

export const config = {
    ...defaultConfig,
    ...(pageConfigs[page] || {})
};