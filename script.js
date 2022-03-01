const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeAddClass();
    card.classList.add("active");
  });
});
function removeAddClass() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
