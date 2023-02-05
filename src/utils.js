import * as convert from "color-convert";

//3. Fonction de génération de palette
export const generatePalette = (codeHexa) => {
    const tabHSL = [];
    const [h, s] = convert.hex.hsl(codeHexa)
    for (let i = 0; i < 100 ; i+=10) {
        tabHSL.push([h,s, i])
    }
    return tabHSL
}