import { Vue, Component } from "vue-property-decorator";
import AMapLoader from "@amap/amap-jsapi-loader";
@Component({
    template: "<div class='amap-container' style='width:100%;height:100%'></div>",
})
export default class Amap extends Vue {
    map = {};

    mounted() {
        this.initMapInstance();
    }

    initMapInstance() {
        AMapLoader.load({
            key: "d9ca9eddce1bac23bbd04872a388a813",
            version: "2.0",
            plugins: ["AMap.Scale"],
        })
            .then((AMap: any) => {
                this.map = new AMap.Map(this.$el, {
                    center: [111.286962, 30.69217],
                    zoom: 14,
                    resizeEnable: true,
                });
            })
            .catch((e: any) => {
                console.error(e);
            });
    }
}
