class FlerianCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});

    this.attrNumberCards = this.getAttribute("flerian-number-cards");
    this.attrCardWidth = this.getAttribute("flerian-card-width");
    this.attrMaxWidth = this.getAttribute("flerian-maxWidth-card");
    this.attrColors = this.getAttribute("flerian-colored-buttons");
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
  //Esta funcion genera las etiquetas <li> dependiendo del atributo "flerian-number-cards" para luego añadirlas al html
  componentLi(num) {
    let list = [];
    let gri;

    if(num < 6) {
      let tem;
      gri = this.attrNumberCards;
      for(let i = 1; i <= num; i++) {
        if(i === 1) {
          tem = `<li class="point active"></li>`;
        }else {
          tem = `<li class="point"></li>`;
        }
        list.push(tem)
      }
    }else {
      gri = 3
      list = ['<li class="arrow left"><</li>',`<li class="count">1 / ${num.toString()}</li>`,'<li class="arrow right">></li>'];
    }
    return {
      li: list.join(""),
      grid: gri
    };
  }
  //Esta funcion contiene el css del componente
  style() {
    let maxWidth = "none";
    let activeColor = "#F2CE16";
    let poinColor = "rgba(255,255,255, 0.35)";

    if(this.attrColors !== null) {
      let colors = (this.attrColors).split(" ");
      if(colors.length === 2) {
        activeColor = colors[0];
        poinColor = colors[1];
      }else {
        activeColor = colors[0];
      }
    }

    if(typeof this.attrMaxWidth === "string") {
      maxWidth = this.attrMaxWidth;
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
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
  }
  .principal {
    width: 100%;
    height: fit-content;
    padding: 20px 0px;
  }
  .content-container {
    width: ${this.attrCardWidth};
    max-width: ${maxWidth};
    height: fit-content;
    margin: 0 auto;
    margin-bottom: 40px;
    overflow: hidden;
  }
  .content-container__cards {
    width: calc((100% * ${this.attrNumberCards}) + (${(parseInt(this.attrNumberCards) - 1) * 20}px));
    height: fit-content;
    min-height: 20px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(${this.attrNumberCards}, 1fr);
    column-gap: 20px;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  .point-list {
    width: 80%;
    max-width: ${this.attrMaxWidth};
    height: fit-content;
    margin: 0 auto;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(${this.componentLi(this.attrNumberCards).grid},1fr);
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    column-gap: 15px;
  }
  .point {
    width: 25px;
    height: 25px;
    background-color: ${poinColor};
    border-radius: 50%;
    transition-duration: 0.4s;
    box-shadow: -2px 2px 5px 0px rgb(0 0 0 / 20%);
    cursor: pointer;
  }
  .active {
    background-color: ${activeColor};
    transform: scale(1.1);
  }

  .arrow {
    width: 40px;
    height: 40px;
    background-color: ${poinColor};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${activeColor};
    font-size: 20px;
    font-weight: bold;
    box-shadow: -2px 2px 5px -1px rgb(0 0 0 / 20%);
    cursor: pointer;
  }
  .count {
    width: 60px;
    height: 40px;
    background-color: ${poinColor};
    color: ${activeColor};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 18px;
    box-shadow: -2px 2px 5px -1px rgb(0 0 0 / 20%);
    cursor: default;
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
  <div class="content-container" id="overflow">
    <div class="content-container__cards" id="cards-container">
    ${this.componentSlots(this.attrNumberCards)}
    </div>
  </div>
  <ul class="point-list">
    ${this.componentLi(this.attrNumberCards).li}
  </ul>
</div>
    `;

    const template = document.createElement("template");
    template.innerHTML = html;
    return template;
  }
  // Esta funcion ejecuta el desplazamiento de las cartas
  cardMovement(num) {
    const $CARDS = this.shadowRoot.getElementById("cards-container");
    const $OVERFLOW = this.shadowRoot.getElementById("overflow");
    const fr = $OVERFLOW.getBoundingClientRect().width;
    let movement = (num * fr);
    const grid = (num !== 0) ?20 * num :0
    movement = movement + grid;
    $CARDS.style.transform = `translateX(-${movement}px)`
  }
  //Esta funcion añade el eventListener a los points, les cambia el color y llama a la funcion que ejecuta el desplazamiento de las cartas
  pointsChange(num) {
    if(num < 6) {
      const $POINT = this.shadowRoot.querySelectorAll(".point");
      const listPoints = [...$POINT];
      let count = 0;
      
      listPoints.forEach((element, position) => {
        element.addEventListener("click", (e) => {
          listPoints.forEach((elem) => {
            elem.classList.remove("active");
          })
          listPoints[position].classList.add("active");
          this.cardMovement(position)
        });
      });
    }else {
      const $CARDS = this.shadowRoot.getElementById("cards-container");
      const $LEFT = this.shadowRoot.querySelector(".left");
      const $RIGHT = this.shadowRoot.querySelector(".right");
      const $COUNT = this.shadowRoot.querySelector(".count");

      let counter = 0;
      
      $LEFT.addEventListener("click", (e) => {
        if(counter === 0) {
          counter = parseInt(this.attrNumberCards) - 1;
          $CARDS.style.transitionDuration = "0s"
        }else {
          counter = counter - 1;
          $CARDS.style.transitionDuration = "0.3s";
        }
        this.cardMovement(counter);
        $COUNT.innerText = `${counter + 1} / ${this.attrNumberCards}`;
      })
      $RIGHT.addEventListener("click", (e) => {
        if(counter === this.attrNumberCards - 1) {
          counter = 0;
          $CARDS.style.transitionDuration = "0s"
        }else {
          counter = counter + 1;
          $CARDS.style.transitionDuration = "0.3s";
        }
        this.cardMovement(counter);
        $COUNT.innerText = `${counter + 1} / ${this.attrNumberCards}`;
      })


    }
  }

  connectedCallback() {
    const template = (this.template()).content;
    this.shadowRoot.appendChild(template.cloneNode(true));

    this.pointsChange(this.attrNumberCards);
  }
}

window.customElements.define("flerian-carousel", FlerianCarousel);

/* 
--flerian-number-cards="number" Este atributo define la cantidad de tarjetas que contendra el carousel del componente.
--flerian-card-width="px / % / etc" Este atributo define el ancho de la tajeta, si usa una unidad relativa como '%' este se basara en el ancho del elemento 'flerian-carousel'.
--flerian-maxWidth-card="px / % / etc" Este atributo define un ancho maximo que tendra la tarjeta. Solo tiene sentido usar este atributo cuando se definio el ancho de la tarjeta con una unidad relativa (%) en el atributo 'flerian-card-width'.
--flerian-colored-buttons="cssColor cssColor / cssColor" Esta funcion define el color de los botones que manejan el carousel, el primer valor define el color del elemento activo o el color de la fuente, el segundo valor define el color del bg-color del boton. tambien puede pasarle un solo atributo que definiria el color del elemento activo o el color de la fuente y por defecto el bg-color del boton es medio transparente.
*/