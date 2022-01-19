import { round } from "lodash-es";

function hexToRgbaArray(color: string) {
    if (!color) return "";
    let c: any;
    let alpha = 1;
    if (color.includes("#")) {
        alpha = hexToAlpha(color.substring(7));
        color = color.substring(0, 7);
    }
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
        c = color.substring(1).split("");
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255, alpha];
    } else return color;
}

function hexToAlpha(hex: string) {
    let decimal = parseInt(hex, 16) ?? 255;
    if (isNaN(decimal)) decimal = 255;
    return round(decimal / 255, 2);
}

export function hexToRgbA(color: string) {
    const array = hexToRgbaArray(color);

    if (Array.isArray(array)) {
        return "rgba(" + array.join(",") + ")";
    } else return color;
}
