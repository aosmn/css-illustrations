const bites = document.getElementsByClassName("bite-mask");
window.addEventListener("load", () => {
  setInterval(() => {
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        const element = bites.item(i);
        element.classList.add("show");
      }, (i + 1) * 600);
    }
    for (let i = 0; i < 7; i++) {
      const element = bites.item(i);
      element.classList.remove("show");
    }
  }, 7 * 600);
});
