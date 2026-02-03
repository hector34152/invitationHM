// CONFIGURACIÓN DE LA FECHA
const weddingDate = new Date("May 08, 2026 14:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div>${days}<span> Días</span></div>
        <div>${hours}<span> Hs</span></div>
        <div>${minutes}<span> Min</span></div>
        <div>${seconds}<span> Seg</span></div>
    `;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "¡ES HOY!";
    }
}, 1000);

// CONTROL DE MÚSICA
const audio = document.getElementById("weddingSong");
const btn = document.getElementById("musicBtn");

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        btn.innerHTML = "⏸ Pausar";
    } else {
        audio.pause();
        btn.innerHTML = "🎵 Reproducir";
    }
}
function startExperience() {
    const audio = document.getElementById("weddingSong");
    const overlay = document.getElementById("overlay");
    const btn = document.getElementById("musicBtn");

    // 1. Intentar reproducir audio
    audio.play().catch(error => {
        console.log("El navegador bloqueó el audio inicial:", error);
    });

    // 2. Actualizar texto del botón de control (por si acaso)
    btn.innerHTML = "⏸ Pausar";

    // 3. Desvanecer la pantalla de bienvenida
    overlay.classList.add("fade-out");
}