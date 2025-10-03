// === SCROLL REVEAL EFFECT ===
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, .gallery img");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run first time
});

// === DARK MODE TOGGLE ===
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerText = 
    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
