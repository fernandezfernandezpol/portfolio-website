export function initCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

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