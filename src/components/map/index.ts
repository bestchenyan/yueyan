import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import AMapLoader from "@amap/amap-jsapi-loader";
import InfoWindow from "../infowindow";
import Modal from "../modal";
import "./index.scss";
import { isEmpty } from "lodash-es";

interface RegionData {
    name: string;
    text: string;
    lon: number;
    lat: number;
    children: any[];
}
let AMap: any;
@Component({
    template: require("./index.html"),
    components: { InfoWindow, Modal },
})
export default class Amap extends Vue {
    @Prop({ default: () => new Object() })
    regionData!: RegionData;
    @Prop({ default: "" })
    curPoint!: string;

    map: any = null;
    markerList: any[] = [];

    markPointName = "";

    infoWindow: any = {};
    markerData = {};

    visible = false;
    infowindowShow = false;

    isCenterMove = false;

    @Watch("regionData")
    onRegionDataChange(nv: RegionData) {
        if (!nv || !this.map) return;
        const { lon, lat } = nv;
        this.isCenterMove = true;
        this.map.on("moveend", this.mapCenterMoveend);
        this.setCenter(lon, lat);
        this.setZoom();
        !isEmpty(this.infoWindow) && this.infoWindow.close();
        this.showMapPoint(nv.children);
    }

    @Watch("curPoint")
    onCurPointChange(val: string) {
        if (!val || !this.map) return;
        if (this.markPointName) {
            if (this.isCenterMove) return;
            this.map.off("moveend", this.mapCenterMoveend);
        }
        this.setMarkPoint(val);
    }

    setMarkPoint(val: string) {
        const data = this.regionData.children.find((g) => g.name === val);
        const { lon, lat } = data;
        this.markPointName = val;
        this.setCenter(lon, lat);
        this.setZoom(14, 18, 1000);
    }

    mounted() {
        this.initMapInstance();
    }

    initMapInstance() {
        AMapLoader.load({
            key: "d9ca9eddce1bac23bbd04872a388a813",
            version: "2.0",
        })
            .then((AMapInstance: any) => {
                AMap = AMapInstance;
                this.map = new AMap.Map(this.$refs.amap, {
                    mapStyle: "amap://styles/26a323acfa4aea8a0ada6f75a7041d03",
                    center: [121.483531, 31.271758],
                    zoom: 16,
                    resizeEnable: true,
                });
                this.showMapPoint(this.regionData.children);
            })
            .catch((e: any) => {
                console.error(e);
            });
    }

    mapCenterMoveend() {
        this.isCenterMove = false;
        this.onCurPointChange(this.curPoint);
    }

    showMapPoint(data: RegionData[]) {
        this.removeMarkList();
        const icon = new AMap.Icon({
            image: window.location.origin + "/images/map/point.png",
            size: [73, 131],
            anchor: "center",
        });
        data.forEach((g: RegionData) => {
            const marker = new AMap.Marker({
                position: [g.lon, g.lat],
                icon: icon,
                offset: [-36, -132],
            });

            marker.on("click", (e: any) => {
                this.markerData = g;
                this.showInfoWindow(e);
            });

            this.markerList.push(marker);
        });
        this.map.add(this.markerList);
    }

    showInfoWindow(e: any) {
        this.infowindowShow = true;
        this.infoWindow = new AMap.InfoWindow({
            isCustom: true,
            content: (<any>this.$refs.infoWindow).$el,
            offset: [0, -280],
            anchor: "center",
        });
        this.infoWindow.open(this.map, e.target.getPosition());
    }

    handleClick(data: { state: boolean; name: string }) {
        const { state, name } = data;
        this.visible = state;
        this.markPointName = name;
    }
    removeMarkList() {
        this.map.remove(this.markerList);
        this.markerList = [];
    }

    setCenter(lon: number, lat: number) {
        this.map.panTo([lon, lat]);
    }

    setZoom(zoom1 = 8, zoom2 = 16, time = 2000) {
        this.map.setZoom(zoom1);
        setTimeout(() => {
            this.map.setZoom(zoom2);
        }, time);
    }
}
