class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.typeheader = this.getAttribute("type-header");
  }

  style() {
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
        height: fit-content;
        margin: 0 auto;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .my-header-container__button {
        width: 30px;
        height: 30px;
        padding: 3px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .my-header-container__button span {
        display: block;
        width: 100%;
        height: 4px;
        background-color: teal;
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
  connectedCallback() {
    const content = (this.template().content).cloneNode(true)
    this.shadowRoot.appendChild(content);
  }
}

window.customElements.define("my-header", MyHeader);