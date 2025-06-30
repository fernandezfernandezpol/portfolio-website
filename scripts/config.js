const filename = window.location.pathname.split('/').pop();
const prefix = (filename !== 'index.html' && filename !== '') ? '../' : './';

const page = filename.replace('.html', '');

const pageConfigs = {
    "aeroespace": {
        logo: `${prefix}images/logo-aeros.png`,
        text: "Ingeniería Aeroespacial"
    },
    "background": {
        logo: `${prefix}images/logo-index.png`,
    },
    "telecommunitacions": {
        logo: `${prefix}images/logo-telecos.png`,
    }
};

const defaultConfig = {
    logo: `${prefix}images/logo-index.png`
};

export const config = {
    ...defaultConfig,
    ...(pageConfigs[page] || {})
};