export function handleImageScrollEffectLeft() {
    const sections = document.querySelectorAll('.scroll-section-left');

    sections.forEach((section) => {
        const imageContainer = section.querySelector('.image-container-left');
        const image = imageContainer?.querySelector('img');
        const text = section.querySelector('.text-container-left');

        if (!imageContainer || !image || !text) return;

        const imageRect = imageContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const imageMidpoint = imageRect.top + imageRect.height / 2;

        let scrollProgress = 0;

        if (imageMidpoint <= windowHeight && imageMidpoint >= 0) {
            scrollProgress = 1 - (imageMidpoint / windowHeight);
        } else if (imageMidpoint < 0) {
            scrollProgress = 1;
        }

        const textProgress = Math.min(scrollProgress * 3, 1);
        text.style.opacity = textProgress;
        const textTranslate = 60 * (1 - textProgress);
        text.style.transform = `translateX(${textTranslate}px)`;

        const imageProgress = scrollProgress * 0.5;

        if (textProgress < 1) {
            const newWidth = 100 - imageProgress * 10;
            imageContainer.style.width = `${newWidth}vw`;

            const translate = -50 - imageProgress * 20;
            image.style.transform = `translateX(${translate}%)`;
        } else {
            imageContainer.style.width = `90vw`;
            image.style.transform = `translateX(-70%)`;
        }
    });
}

window.addEventListener('scroll', handleImageScrollEffectLeft);
window.addEventListener('load', handleImageScrollEffectLeft);