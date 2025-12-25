/* ===== ROLAGEM SUAVE ===== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

/* ===== FADE IN AO CARREGAR ===== */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".glass");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});

/* ===== ANIMAÇÃO AO ROLAR (SCROLL REVEAL) ===== */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".glass, .news-item, .agenda li").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* ===== EFEITO NOS BOTÕES ===== */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

/* ===== GALERIA: ZOOM SUAVE ===== */
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.06)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

/* ===== MENU ATIVO ===== */
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#9b59b6";
    link.style.fontWeight = "600";
  }
});

// Pulsar suave no CTA
const cta = document.querySelector(".special-cta");
if (cta) {
  setInterval(() => {
    cta.style.opacity = "0.6";
    setTimeout(() => {
      cta.style.opacity = "1";
    }, 700);
  }, 1400);
}

document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".apology-text");

  texts.forEach((text, index) => {
    text.style.opacity = "0";
    text.style.transform = "translateY(20px)";
    text.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    setTimeout(() => {
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";
    }, 500 + index * 700);
  });
});

const title = document.querySelector(".apology-card h1");
if (title) {
  setInterval(() => {
    title.style.textShadow = "0 0 12px rgba(255,182,193,0.8)";
    setTimeout(() => {
      title.style.textShadow = "none";
    }, 1200);
  }, 2500);
}

let player;
let tocando = false;


function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytPlayer');
}


const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

const box = document.getElementById("musicBox");

if (box) {
  box.addEventListener("click", () => {
    if (!tocando) {
      player.playVideo();
      tocando = true;
      box.querySelector(".music-hint").innerText = "⏸️ Pausar música";
    } else {
      player.pauseVideo();
      tocando = false;
      box.querySelector(".music-hint").innerText = "▶️ Tocar música";
    }
  });
}
