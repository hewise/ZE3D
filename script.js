document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.grid-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    if (galleryItems.length > 0 && lightbox && lightboxImg && captionText && closeBtn) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                lightbox.style.display = 'block';
                lightboxImg.src = item.src;
                captionText.innerHTML = item.alt;
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    const sections = document.querySelectorAll('.content-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
