import * as convert from "color-convert";

export class Colors {
    #hsl;
    #hex;
    #element;

    constructor(hsl) {
        this.#hsl = hsl;
        this.#hex =  `#${convert.hsl.hex(hsl)}`;
        this.#element = this.#generateElement();

    }
    #generateElement(){
        const colorElement = document.createElement("div")
        colorElement.classList.add("color");
        colorElement.dataset.color = this.#hex;
        colorElement.style.backgroundColor = this.#hex;

        const texteElement = document.createElement("p")
        texteElement.textContent = this.#hex
        texteElement.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";

        return colorElement;

    }

    display(parentElement){
        parentElement.appendChild(this.#element)

    }
}