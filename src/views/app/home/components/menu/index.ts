import { Vue, Component, Watch } from "vue-property-decorator";
import { regionList } from "../../data";
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
})
export default class Menu extends Vue {
    regionList = regionList;
    curRegion = this.regionList[0].name;

    radioList: RegionData[] = [];
    curRadio = "";

    @Watch("curRegion", { immediate: true })
    handleRegionChange(val: string) {
        const regionData = this.regionList.find((g) => g.name === val);
        this.radioList = regionData?.children || [];
        this.curRadio = this.radioList[0]?.name;
        this.$emit("handle-region-change", regionData);
    }

    @Watch("curRadio", { immediate: true })
    handleRadioChange(value: string) {
        this.$emit("handle-radio-change", value);
    }
}
