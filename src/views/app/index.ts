import { Vue, Component } from "vue-property-decorator";
import "./index.scss";
@Component({
    template: require("./index.html"),
})
export default class App extends Vue {}
