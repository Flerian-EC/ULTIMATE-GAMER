class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.typeheader = this.getAttribute("type-header");
    this.color = this.getAttribute("button-color");
  }

  style() {
    let col;
    if(this.color === null) {
      col = "teal";
    }else {
      col = this.color;
    }

    const css = `
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      :host {
        display: block;
        width: 100%;
        height: fit-content;
      }
      .my-header {
        width: 100%;
        height: fit-content;
      }
      .my-header-container {
        width: 90%;
        height: 50px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .my-header-container__button {
        width: 30px;
        height: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .my-header-container__button span {
        display: block;
        width: 100%;
        height: 4px;
        background-color: ${col};
        will-change: transform;
        transition-property: transform opacity;
        transition-duration: 0.5s;
      }
      .button-animation span:nth-child(1) {
        transform: translateY(calc(12px - 50%)) rotate(45deg);
      }
      .button-animation span:nth-child(2) {
        transform: rotate(45deg);
        opacity: 0%;
        transition-duration: 0.5s;
      }
      .button-animation span:nth-child(3) {
        transform: translateY(calc(-12px + 50%)) rotate(-45deg);
      }
      </style>
    `;
    return css;
  }
  template() {
    const template = document.createElement("template");
    const html = `
    ${this.style()}
    <header class="my-header">
      <div class="my-header-container">
        <img src="" alt="LOGO">
        <div class="my-header-container__button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
    `
    template.innerHTML = html;
    return template
  }

  buttonAnimation() {
    const butt = this.shadowRoot.querySelector(".my-header-container__button");
    butt.addEventListener("click", () => {
      butt.classList.toggle("button-animation");
    })
  }
  connectedCallback() {
    const content = (this.template().content).cloneNode(true)
    this.shadowRoot.appendChild(content);

    //animacion del boton
    this.buttonAnimation()

    console.log(this.color)
  }
}

window.customElements.define("my-header", MyHeader);