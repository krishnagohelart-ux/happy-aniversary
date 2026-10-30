"use strict";

// ----------------------------------
// 1. CINEMATIC OPENING
// ----------------------------------
const opening = document.getElementById("opening");
const enterBtn = document.getElementById("enterBtn");
const mainContent = document.getElementById("mainContent");

enterBtn.addEventListener("click", () => {
  opening.classList.add("opened");
  mainContent.classList.remove("hidden");

  window.setTimeout(() => {
    opening.style.display = "none";
  }, 1100);

  window.setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.95) {
        element.classList.add("visible");
      }
    });
  }, 100);

  createHearts(12);
});

// ----------------------------------
// 2. GENTLE GOLD SPARKLES
// ----------------------------------
const sparkleContainer = document.getElementById("sparkles");

for (let i = 0; i < 45; i++) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.animationDelay = `${Math.random() * 4}s`;
  sparkle.style.animationDuration = `${2 + Math.random() * 4}s`;
  sparkleContainer.appendChild(sparkle);
}

// ----------------------------------
// 3. SCROLL REVEAL ANIMATIONS
// ----------------------------------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// ----------------------------------
// 4. NINETEEN INTERACTIVE REASONS
// ----------------------------------
const reasons = [
  {
    en: "Your unconditional love.",
    gu: "તમારા નિઃસ્વાર્થ પ્રેમ માટે."
  },
  {
    en: "The sacrifices you make.",
    gu: "મારા માટે કરેલા ત્યાગ માટે."
  },
  {
    en: "The way you care for our family.",
    gu: "પરિવારની કાળજી લેવા માટે."
  },
  {
    en: "The comfort of your presence.",
    gu: "તમારી હાજરીથી મળતા હૂંફાળા અહેસાસ માટે."
  },
  {
    en: "The values you teach me.",
    gu: "જીવનના સુંદર સંસ્કાર આપવા માટે."
  },
  {
    en: "Your patience and understanding.",
    gu: "તમારી ધીરજ અને સમજણ માટે."
  },
  {
    en: "The happiness you bring home.",
    gu: "ઘરમાં ખુશીઓ લાવવા માટે."
  },
  {
    en: "Your strength through difficult days.",
    gu: "મુશ્કેલ સમયમાં હિંમત રાખવા માટે."
  },
  {
    en: "The little things you do.",
    gu: "રોજની નાની-નાની કાળજી માટે."
  },
  {
    en: "The laughter we share.",
    gu: "સાથે વિતાવેલી હાસ્યભરી પળો માટે."
  },
  {
    en: "The memories we create.",
    gu: "સાથે બનાવેલી યાદો માટે."
  },
  {
    en: "Your kindness to others.",
    gu: "બીજાઓ પ્રત્યેની તમારી દયા માટે."
  },
  {
    en: "The way you stand by each other.",
    gu: "એકબીજાનો સાથ નિભાવવાની રીત માટે."
  },
  {
    en: "Your honest and caring hearts.",
    gu: "તમારા સાચા અને પ્રેમાળ દિલ માટે."
  },
  {
    en: "The safe feeling of being home.",
    gu: "ઘરે મળતી સુરક્ષા અને હૂંફ માટે."
  },
  {
    en: "The dreams you help me follow.",
    gu: "મારા સપનાઓને સાથ આપવા માટે."
  },
  {
    en: "The lessons life teaches through you.",
    gu: "તમારા જીવનમાંથી શીખવા મળતા પાઠ માટે."
  },
  {
    en: "The love that keeps growing.",
    gu: "દર વર્ષે વધતા જતા તમારા પ્રેમ માટે."
  },
  {
    en: "Simply because you are my parents.",
    gu: "કારણ કે તમે મારા મમ્મી અને પપ્પા છો."
  }
];

const reasonsGrid = document.getElementById("reasonsGrid");

reasons.forEach((reason, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "reason-card";
  card.setAttribute("aria-label", `Reveal reason ${index + 1}`);
  card.setAttribute("aria-pressed", "false");

  card.innerHTML = `
    <span class="reason-inner">
      <span class="reason-front">
        <span class="reason-number">${String(index + 1).padStart(2, "0")}</span>
        <small>Tap to discover ✦</small>
      </span>
      <span class="reason-back">
        <p>${reason.en}</p>
        <p class="gujarati">${reason.gu}</p>
      </span>
    </span>
  `;

  card.addEventListener("click", () => {
    const flipped = card.classList.toggle("flipped");
    card.setAttribute("aria-pressed", String(flipped));

    if (flipped) createHearts(2);
  });

  reasonsGrid.appendChild(card);
});

// ----------------------------------
// 5. OPEN THE SECRET LOVE LETTER
// ----------------------------------
const envelopeBtn = document.getElementById("envelopeBtn");
const letterContent = document.getElementById("letterContent");

envelopeBtn.addEventListener("click", () => {
  const isOpen = !letterContent.classList.contains("hidden");

  if (isOpen) {
    letterContent.classList.add("hidden");
    envelopeBtn.setAttribute("aria-expanded", "false");
    envelopeBtn.querySelector(".envelope-action").textContent = "Tap to open ✦";
  } else {
    letterContent.classList.remove("hidden");
    envelopeBtn.setAttribute("aria-expanded", "true");
    envelopeBtn.querySelector(".envelope-action").textContent = "Your letter is open ♡";
    createHearts(10);

    window.setTimeout(() => {
      letterContent.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
  }
});

// ----------------------------------
// 6. FLOATING HEART ANIMATION
// ----------------------------------
function createHearts(amount = 8) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
    heart.style.left = `${10 + Math.random() * 80}%`;
    heart.style.top = `${45 + Math.random() * 35}%`;
    heart.style.fontSize = `${14 + Math.random() * 20}px`;
    document.body.appendChild(heart);

    window.setTimeout(() => heart.remove(), 3000);
  }
}

// ----------------------------------
// 7. FINAL CONFETTI SURPRISE
// ----------------------------------
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

let surpriseRevealed = false;

surpriseBtn.addEventListener("click", () => {
  if (surpriseRevealed) return;

  surpriseRevealed = true;
  surpriseMessage.classList.remove("hidden");
  surpriseBtn.textContent = "Surprise Revealed ♡";
  surpriseBtn.disabled = true;
  surpriseBtn.style.opacity = "0.7";

  launchConfetti(150);
  createHearts(35);

  window.setTimeout(() => {
    surpriseMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 200);
});

function launchConfetti(amount = 100) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) return;

  const colors = ["#e8c77c", "#fff0c4", "#b94767", "#f6df9e", "#ffffff"];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[
      Math.floor(Math.random() * colors.length)
    ];
    piece.style.animationDelay = `${Math.random() * 1.5}s`;
    piece.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);

    window.setTimeout(() => piece.remove(), 5500);
  }
}