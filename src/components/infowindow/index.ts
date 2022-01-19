import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import InfoWindow1Border from "./components/border";
import "./index.scss";
@Component({
    template: require("./index.html"),
    components: { InfoWindow1Border },
})
export default class InfoWindow extends Vue {
    @Prop()
    data!: any;
    @Prop()
    infoWindow!: any;

    borderStyle: { width?: number; height?: number; color?: string; backgroundColor?: string; titleHeight?: number } = {};
    titleBgSize = {};

    get exteriorStyle() {
        return {
            width: "unset",
            height: "unset",
            padding: "0px 20px 20px",
            "--theme-color": "#09E5F6",
        };
    }

    get closeStyle() {
        return { top: "16px", right: "20px", "--icon-fontSize": "18px" };
    }

    get titleStyle() {
        return {
            "font-family": "zhenyanGB",
            "font-weight": "normal",
            color: "rgb(255, 255, 255)",
            "font-size": "20px",
            "background-image": "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 30%, rgb(9, 229, 246) 100%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
        };
    }

    get contentStyle() {
        return {
            "flex-flow": "row",
        };
    }

    get valueStyle() {
        return {
            "font-family": "auto",
            "font-weight": "normal",
            color: "rgb(255, 255, 255)",
            "font-size": "16px",
        };
    }

    get buttonStyle() {
        return {
            width: "97px",
            height: " 27px",
            "font-family": "auto",
            "font-weight": "bolder",
            color: "rgb(255, 255, 255)",
            "font-size": "14px",
            "background-color": "rgba(9, 229, 246, 0.6)",
        };
    }

    get footerLineStyle() {
        return { "--footer-line-height": "140px" };
    }

    get fieldData() {
        return this.data?.descript?.split(";");
    }

    @Watch("data", { deep: true })
    onChange() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.initBorderStyle();
            }, 200);
        });
    }
    mounted() {
        this.initBorderStyle();
    }

    initBorderStyle() {
        const el: HTMLElement = <HTMLElement>this.$refs.info;
        this.borderStyle = {
            width: el?.offsetWidth || 0,
            height: el?.offsetHeight || 0,
            color: "#09E5F6",
            backgroundColor: "#040C2FE6",
        };

        this.titleBgSize = {
            width: 200,
            height: 38,
        };
    }

    close() {
        this.infoWindow.close();
    }

    handleClick() {
        //
    }
}
