// INTRO LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1200);
});

// 19 REASONS
const reasons = [
  "Your unconditional love",
  "The way you care for me",
  "Your endless support",
  "Your beautiful smiles",
  "The sacrifices you make",
  "Your patience",
  "Your guidance",
  "The warmth of our home",
  "Your little acts of kindness",
  "The lessons you teach me",
  "Your strength together",
  "Your blessings",
  "The happiness you bring",
  "Your understanding",
  "Your encouragement",
  "The memories we create",
  "The way you protect me",
  "Your beautiful hearts",
  "Simply because you are my parents"
];

const reasonGrid = document.getElementById("reasonGrid");

reasons.forEach((reason, index) => {
  const card = document.createElement("div");
  card.className = "reason-card";

  card.innerHTML = `
    <span>${String(index + 1).padStart(2, "0")}</span>
    <p>${reason}</p>
  `;

  reasonGrid.appendChild(card);
});

// PHOTO LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => {
    lightboxImage.src = card.dataset.image;
    lightboxCaption.textContent = card.dataset.caption;
    lightbox.classList.add("show");
  });
});

document.getElementById("closeLightbox").addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
  }
});

// ENVELOPE LETTER
document.getElementById("envelope").addEventListener("click", () => {
  const letter = document.getElementById("letterContent");
  letter.classList.toggle("show");

  document.getElementById("envelope").innerHTML =
    letter.classList.contains("show")
      ? '<span class="envelope-heart">♥</span><span class="envelope-text">YOUR LETTER IS OPEN</span>'
      : '<span class="envelope-heart">♥</span><span class="envelope-text">OPEN YOUR LETTER</span>';

  if (letter.classList.contains("show")) {
    letter.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

// PERSONAL VOICE MESSAGE
const voice = document.getElementById("myVoice");
const voiceButton = document.getElementById("voiceButton");

voiceButton.addEventListener("click", async () => {
  if (voice.paused) {
    try {
      await voice.play();
      voiceButton.innerHTML = "<span>Ⅱ</span> PAUSE MY VOICE";
    } catch (error) {
      alert("Please add your voice.mp3 file to the website folder first.");
    }
  } else {
    voice.pause();
    voiceButton.innerHTML = "<span>▶</span> PLAY MY VOICE";
  }
});

voice.addEventListener("ended", () => {
  voiceButton.innerHTML = "<span>▶</span> PLAY MY VOICE";
});

// CELEBRATION
document.getElementById("celebrateButton").addEventListener("click", () => {
  const colors = ["#d8b77a", "#f3e8d8", "#a85b75", "#ffffff"];

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }

  document.querySelector(".final-content h2").textContent =
    "Forever starts again. ❤️";
});
