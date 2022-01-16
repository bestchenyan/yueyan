import { Vue, Component } from "vue-property-decorator";
import AMapLoader from "@amap/amap-jsapi-loader";
@Component({
    template: "<div class='amap-container' style='width:100%;height:100%'></div>",
})
export default class Amap extends Vue {
    map = null;

    mounted() {
        this.initMapInstance();
    }

    initMapInstance() {
        AMapLoader.load({
            key: "d9ca9eddce1bac23bbd04872a388a813",
            version: "2.0",
        })
            .then((AMap: any) => {
                this.map = new AMap.Map(this.$el, {
                    mapStyle: "amap://styles/26a323acfa4aea8a0ada6f75a7041d03",
                    center: [121.483531, 31.271758],
                    zoom: 16,
                    resizeEnable: true,
                });
            })
            .catch((e: any) => {
                console.error(e);
            });
    }
}
