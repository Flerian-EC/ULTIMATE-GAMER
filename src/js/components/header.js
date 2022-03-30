class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.image = this.getAttribute("url-image");
    this.color = this.getAttribute("button-color");
    this.headerMov = this.getAttribute("header-movement");
    this.transparent = this.getAttribute("transparent-header");
  }

  //Esta funcion contiene el css del componente
  styles() {
    let col;
    let tra;
    let positio;
    if(this.color === null) {
      col = "teal";
    }else {
      col = this.color;
    }

    if(this.transparent !== "true") {
      tra = "white";
      positio = "static";
    }else {
      tra = "transparent";
      positio = "absolute";
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
        height: 70px;
        position: ${positio};
        top: 0;
        left: 0;
        will-change: transform;
        background-color: ${tra};
        transition-property: transform;
        transition-duration: 0.5s;
        z-index: 1000;
      }
      .my-header {
        width: 100%;
        height: 100%;
      }
      .my-header-container {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .my-header-container a {
        width: fit-content;
        height: fit-content;
      }
      .my-header-container img {
        height: 60px;
        filter: drop-shadow(-1px 1px 2px rgb(0 0 0 / 60%));
      }
      .my-header-container__button {
        width: 40px;
        height: 34px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .my-header-container__button span {
        display: block;
        width: 100%;
        height: 4px;
        background-color: ${col};
        box-shadow: -1px 1px 3px 0px rgb(0 0 0 / 60%);
        will-change: transform;
        transition-property: transform, opacity;
        transition-duration: 0.5s;
      }
      .button-animation span:nth-child(1) {
        transform: translateY(calc(17px - 50%)) rotate(45deg);
      }
      .button-animation span:nth-child(2) {
        transform: rotate(45deg);
        opacity: 0%;
        transition-duration: 0.5s;
      }
      .button-animation span:nth-child(3) {
        transform: translateY(calc(-17px + 50%)) rotate(-45deg);
      }
      </style>
    `;
    return css;
  }
  //Esta funcion contiene el HTML del componente
  template() {
    const template = document.createElement("template");
    const html = `
    ${this.styles()}
    <header class="my-header">
      <div class="my-header-container">
      <a href="/">
      <img src="${this.image}" alt="Logo de Ultimate Gamer">
      </a>
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
  //Esta funcion activa la animacion del boton
  buttonAnimation() {
    const butt = this.shadowRoot.querySelector(".my-header-container__button");
    butt.addEventListener("click", () => {
      butt.classList.toggle("button-animation");
    })
  }
  //Esta funcion ejecuta la transparencia del header
  transparetHeader(val) {
    if(this.transparent === "true" && val === true) {
      this.style.backgroundColor = "rgba(255,255,255,20%)"
      this.style.backdropFilter = "blur(6px)"
    }else if(this.transparent === "true" && val === false) {
      this.style.backgroundColor = "transparent"
      this.style.backdropFilter = "unset"
    }
  }
  //Esta funcion es la que activa el seguimiento del header en pantalla
  headerMovement() {
    if(this.headerMov !== "false") {
      let move;
      document.addEventListener("scroll", () => {
        move = window.scrollY;
        this.style.transform = `translateY(${move}px)`;

        if(move != 0) {
          this.style.boxShadow = "rgb(0 0 0 / 50%) 0px -1px 20px 0px";
          this.transparetHeader(true)
        }else {
          this.style.boxShadow = "unset";
          this.transparetHeader(false)
        }
      })
    }
  }


  //Esta funcion se activa automaticamente al crear el componente '<my-header></my-header>' en HTML.
  connectedCallback() {
    const content = (this.template().content).cloneNode(true)
    this.shadowRoot.appendChild(content);

    this.buttonAnimation()

    this.headerMovement()
  }
}

/*
  Este es el componente web en HTML:
  <my-header></my-header>
  Estos son los tipos de atributos que tiene el componente web:

  -url-image="string" Define la ruta de img que buscara el componete;
  -button-color="colorCss" Define el color del boton del componente;
  -header-movement="true / false" Define si el componente te seguira o no en pantalla;
  -transparent-header="true / false" define si el header es transparente o no;
*/
window.customElements.define("my-header", MyHeader);