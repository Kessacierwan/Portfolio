const loadbar = document.querySelector('.loadbar');
const insideloadbar = document.querySelector('.insideloadbar');
const chargementText = document.querySelector('.chargement');

let progress = 0;
let glitchInterval = null;

function updateProgress() {
  progress += 1;
  insideloadbar.style.width = `${progress}%`;
  chargementText.textContent = `Chargement de la carte graphique ${progress}%`;
  if (progress < 100) {
    requestAnimationFrame(updateProgress);
  } else {
    // La barre de chargement a atteint son maximum, on la fait revenir au début
    progress = 0;
    insideloadbar.style.width = '0%';
    chargementText.textContent = 'Chargement de la carte graphique 0%';
    // On relance la animation
    requestAnimationFrame(updateProgress);
  }
}

// Fonction pour ajouter des glitches à la barre de chargement
function addGlitch() {
  // Ajout d'un glitch aléatoire toutes les 0.5 secondes
  glitchInterval = setInterval(() => {
    const glitchType = Math.random() < 0.5? 'hake' : 'flicker';
    switch (glitchType) {
      case 'hake':
        insideloadbar.style.transform = 'translateX(5px)';
        setTimeout(() => {
          insideloadbar.style.transform = 'translateX(0)';
        }, 50);
        break;
      case 'flicker':
        insideloadbar.style.opacity = 0;
        setTimeout(() => {
          insideloadbar.style.opacity = 0.75;
        }, 5);
        break;
    }
  }, 10);
}

// On lance la fonction addGlitch pour ajouter des glitches à la barre de chargement
addGlitch();

updateProgress();



function openmaincontent(){
  window.location.href = "/index.html";
}

function openpageone(){
  window.location.href = "/index.html";
}