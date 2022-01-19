import { Vue, Component } from "vue-property-decorator";
import Amap from "@/components/map";
import Menu from "./components/menu";
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
    components: { Amap, "p-Menu": Menu },
})
export default class Home extends Vue {
    videoUrl = "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/yulanyayuan/116773.mp4";

    regionData = {};
    curPoint = "";

    handleRegionChange(data: RegionData) {
        this.regionData = data;
    }

    handleRadioChange(val: string) {
        this.curPoint = val;
    }
}
