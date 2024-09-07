
<!-- script.js -->
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.createElement('audio');
    audio.loop = true;
    audio.src = '123.mp3'; // Replace with your music file

    const audioControl = document.createElement('button');
    audioControl.textContent = 'Play Music';
    audioControl.className = 'btn';
    audioControl.style.position = 'fixed';
    audioControl.style.bottom = '20px';
    audioControl.style.right = '20px';

    document.body.appendChild(audioControl);

    audioControl.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            audioControl.textContent = 'Pause Music';
        } else {
            audio.pause();
            audioControl.textContent = 'Play Music';
        }
    });

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
});
