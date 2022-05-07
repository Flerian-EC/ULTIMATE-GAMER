class FlerianCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});

    this.attrNumberCards = this.getAttribute("flerian-number-cards");
    this.attrCardWidth = this.getAttribute("flerian-card-width");
  }

  //Esta funcion genera las etiquetas <slot> dependiendo del atributo "flerian-number-cards" para luego añadirlas al html
  componentSlots(num) {
    const list = [];
    let tem;
    for(let i = 1; i <= num; i++) {
      tem = `<slot name="${i.toString()}"></slot>`;
      list.push(tem)
    }
    return list.join("");
  }
  //Esta funcion contiene el css del componente
  style() {
    const css = `
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :host {
    width: 100%;
    height: fit-content;
  }
  .principal {
    width: 100%;
    height: fit-content;
    padding: 20px 0px;
  }
  .content-container {
    width: ${this.attrCardWidth};
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .content-container__cards {
    width: calc((100% * ${this.attrNumberCards}) + (${(parseInt(this.attrNumberCards) - 1) * 10}px));
    height: fit-content;
    min-height: 20px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(${this.attrNumberCards}, 1fr);
    column-gap: 10px;
  }
</style>
    `;
    return css;
  }
  //Esta funcion contiene el HTML del componente
  template() {
    const html = `
${this.style()}
<div class="principal">
  <div class="content-container">
    <div class="content-container__cards">
    ${this.componentSlots(this.attrNumberCards)}
    </div>
  </div>
  <ul class="point list">
    
  </ul>
</div>
    `;

    const template = document.createElement("template");
    template.innerHTML = html;
    return template;
  }

  connectedCallback() {
    const template = (this.template()).content;
    this.shadowRoot.appendChild(template.cloneNode(true));
  }
}

window.customElements.define("flerian-carousel", FlerianCarousel);