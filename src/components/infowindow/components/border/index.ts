import { Vue, Component, Prop } from "vue-property-decorator";
import { hexToRgbA } from "@/common/utils/function";
import "./index.scss";

@Component({
    template: require("./index.html"),
})
class InfoWindow1Border extends Vue {
    @Prop()
    borderStyle!: { width: number; height: number; color: string; backgroundColor?: string; titleHeight: number };
    @Prop()
    titleBgSize!: { width: number; height: number };

    get svgStyle() {
        const { width, height } = this.borderStyle;
        return {
            width,
            height,
        };
    }

    get themeColor() {
        return this.borderStyle.color;
    }

    get colorMatrix() {
        if (!this.themeColor) return "";
        const words = (str: string, pattern: RegExp) => str.match(pattern)?.filter(Boolean) || [];
        const parseValue = (val: number) => Math.round((val / 255) * 10000) / 10000;
        const parseValueArr = (arr: string[]) => {
            const rgba: number[] = [];
            arr?.forEach((val: string, idx: number) => {
                const isLastIdx = idx === arr.length - 1;
                rgba[idx] = isLastIdx ? +val : parseValue(+val);
            });
            return rgba;
        };
        const color = hexToRgbA(this.themeColor);
        const rgbaArr = words(color, /\d+\.?\d*/g);
        const parseRgbaArr = parseValueArr(rgbaArr);
        const { r, g, b, a } = { r: parseRgbaArr[0], g: parseRgbaArr[1], b: parseRgbaArr[2], a: parseRgbaArr[3] };
        return `
        ${r} 0 0 0 ${r}
        0 ${g} 0 0 ${g}
        0 0 ${b} 0 ${b}
        0 0 0 ${a} 0
        `;
    }

    get backgroundColor() {
        return this.borderStyle.backgroundColor;
    }

    get strokeAttr() {
        return {
            stroke: this.themeColor,
            "stroke-width": "1",
            "stroke-linecap": "round",
        };
    }

    get leftTriangle() {
        return "M 2 2 L 12 2 L 2 12 Z";
    }

    get leftRect() {
        const { height: h } = this.borderStyle;
        if (!h) return "";
        return `M 0 ${h} L 18 ${h} L 18 ${h - 2} L 2 ${h - 2} L 2 ${h - 18} L 0 ${h - 18} Z`;
    }

    get rightRect() {
        const { width: w, height: h } = this.borderStyle;
        if (!w || !h) return "";
        return `M ${w} ${h} L ${w - 18} ${h} L ${w - 18} ${h - 2} L ${w - 2} ${h - 2} L ${w - 2} ${h - 18} L ${w} ${h - 18} Z  `;
    }

    get rightTriangle() {
        const { width: w } = this.borderStyle;
        if (!w) return "";
        return `M ${w - 2} 2 L ${w - 12} 2 L ${w - 2} 12 Z`;
    }

    get titleBgPoints() {
        const { width: w } = this.borderStyle;
        const { width: tw, height: th } = this.titleBgSize;
        if (!w || !tw) return "";

        const hw = w / 2;
        const htw = tw / 2;
        const startX = hw - htw;
        const endX = hw + htw;
        const y = 0;
        return `${startX} ${y} ${startX + th} ${th + y} ${endX - th} ${th + y} ${endX} ${y}`;
    }

    get borderPath() {
        const { width, height } = this.borderStyle;
        if (!width || !height) return "";
        const x = 2;
        const y = 2;
        const w = width - x;
        const h = height - y;
        const hw = w / 2;
        const s = 15;
        return `
        ${x} ${s + y} ${s + x} ${y} ${w - s} ${y} ${w} ${s + y}
         ${w} ${h} ${hw + 50 + 10} ${h} ${hw + 50} ${h - 10} ${hw - 50} ${h - 10} ${hw - 50 - 10} ${h} ${x} ${h}
        `;
    }
}

export default InfoWindow1Border;
