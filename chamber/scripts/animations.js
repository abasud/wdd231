window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".membership-card");
  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("membership-card-open");
    });
  }, 50);
});
