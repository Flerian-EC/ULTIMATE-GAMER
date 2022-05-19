let buttons = document.querySelectorAll(".flerian-button-menu");
const header = document.querySelector("flerian-header")
buttons = [...buttons];
buttons.forEach((element) => {
  element.addEventListener("click", () => {
    header.setAttribute("flerian-attribute-observer", "false");
  })
})