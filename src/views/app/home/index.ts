import { Vue, Component } from "vue-property-decorator";
import Amap from "@/components/map";
import Menu from "./components/menu";
import CountDown from "@/components/countdown";
import dayjs from "dayjs";
import "./index.scss";

interface RegionData {
    name: string;
    text: string;
    lon: number;
    lat: number;
    children: any[];
}
@Component({
    template: require("./index.html"),
    components: { Amap, "p-Menu": Menu, CountDown },
})
export default class Home extends Vue {
    regionData = {};
    curPoint = "";

    visible = true;
    showCountDown = true;

    countDown = dayjs("2022-1-23").valueOf();
    // countDown = 1642744919592;

    handleRegionChange(data: RegionData) {
        this.regionData = data;
    }

    handleRadioChange(val: string) {
        this.curPoint = val;
    }

    handleTimeEnd() {
        this.visible = false;
        this.showCountDown = false;
    }
}
