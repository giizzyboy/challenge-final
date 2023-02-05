import {generatePalette} from "./utils";

//4. Gérer l'entrée utilisateur
const form = document.querySelector("form");
// const regex = new RegExp("/^#[0-9A-F]")

form.addEventListener("submit", (e)=>{
    try {
        e.preventDefault();
        const inputValue = form.querySelector("input[type='text']").value;

        if (/^#[0-9A-F]{6}$/i.test(inputValue)){
            const palette = generatePalette(inputValue);
            console.log(inputValue, palette)
        }else {
            throw new Error(`${inputValue} is not a valid Hexadecimal color`)
        }

    }catch (err) {
        console.error(err)
    }
})


