// CONTROL DE MÚSICA
const audio = document.getElementById("weddingSong");
const btn = document.getElementById("musicBtn");
audio.volume = 0.2;

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        btn.innerHTML = "Pausar";
    } else {
        audio.pause();
        btn.innerHTML = "Reproducir";
    }
}
function startExperience() {
    const audio = document.getElementById("weddingSong");
    const overlay = document.getElementById("overlay");
    const btn = document.getElementById("musicBtn");

    audio.play().catch(error => {
        console.log("El navegador bloqueó el audio inicial:", error);
    });
    btn.innerHTML = "⏸ Pausar";
    overlay.classList.add("fade-out");
}