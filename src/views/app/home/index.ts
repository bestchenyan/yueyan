import { Vue, Component } from "vue-property-decorator";
import Amap from "@/components/Amap";
import "./index.scss";
@Component({
    template: require("./index.html"),
    components: { Amap },
})
export default class Home extends Vue {}
