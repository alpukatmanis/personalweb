<!-- script.js -->
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    const audioControl = document.getElementById('audioControl');
    const content = document.getElementById('content');

    // Load initial page
    loadPage('page1.html');

    // Autoplay attempt
    let autoplayAttempt = audio.play();
    if (autoplayAttempt !== undefined) {
        autoplayAttempt.then(() => {
            audioControl.textContent = 'Pause Music';
        }).catch(error => {
            console.log("Autoplay was prevented:", error);
            audioControl.textContent = 'Play Music';
        });
    }

    // Audio control
    audioControl.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            audioControl.textContent = 'Pause Music';
        } else {
            audio.pause();
            audioControl.textContent = 'Play Music';
        }
    });

    // Page transition
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('next-page')) {
            e.preventDefault();
            loadPage(e.target.getAttribute('href'));
        }
    });

    // Load page content
    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
                history.pushState(null, '', url);
                if (url === 'confession.html') {
                    setupConfessionPage();
                }
            });
    }

    // Setup confession page
    function setupConfessionPage() {
        const revealBtn = document.getElementById('revealBtn');
        const confession = document.getElementById('confession');
        const fullMessage = document.getElementById('fullMessage');

        if (revealBtn) {
            revealBtn.addEventListener('click', function() {
                confession.classList.remove('hidden');
                setTimeout(() => {
                    fullMessage.classList.remove('hidden');
                    revealBtn.style.display = 'none';
                }, 2000);
            });
        }
    }
});
