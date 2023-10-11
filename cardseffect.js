const cards = document.querySelectorAll(".card");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isCardVisible() {
  for (card of cards) {
    isElementInViewport(card)
      ? card.classList.add("isVisible")
      : card.classList.remove("isVisible");
  }
}

document.addEventListener("DOMContentLoaded", isCardVisible);
// window.addEventListener("wheel", isCardVisible);
window.addEventListener('wheel', w => {
    if ( w.deltaX !== 0 ) {
        isCardVisible
    }
    if ( w.deltaY !== 0 ) {
        isCardVisible
    }
})
window.addEventListener("resize", isCardVisible);