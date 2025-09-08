// Rolagem suave nos links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// Animação de destaque no título da home
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".home h2");
  if (title) {
    title.style.opacity = "0";
    setTimeout(() => {
      title.style.transition = "opacity 2s";
      title.style.opacity = "1";
    }, 300);
  }
});