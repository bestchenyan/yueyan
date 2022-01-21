import { Vue, Component, Prop, Watch, Model } from "vue-property-decorator";
import { category } from "@/views/app/home/data";
import "./index.scss";
import { isEmpty } from "lodash-es";

let vm: any = null;

interface Category {
    name: string;
    text: string;
    imgList: string[];
    videoList: string[];
}
@Component({
    template: require("./index.html"),
})
export default class Modal extends Vue {
    @Model("change", { default: false })
    visible!: boolean;

    @Prop({ default: "" })
    curPoint!: keyof typeof category;

    data = {};

    activeImg = "";

    swiperOption: any = {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            disableOnInteraction: false,
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChange: function () {
                const index = (<any>this).realIndex;
                vm.activeImg = vm.imgList[index];
            },
        },
    };

    get imgList() {
        return (<Category>this.data)?.imgList;
    }

    get videoList() {
        return (<Category>this.data)?.videoList;
    }

    @Watch("visible")
    onVisibleChange(nv: boolean) {
        if (!nv) return;
        this.data = category[this.curPoint];
        if (!this.data || isEmpty(this.data)) {
            this.$message.info("我们还没在这里拍过照呢！");
            this.handleCancel();
            return;
        }
        this.activeImg = (<Category>this.data).imgList[0];
    }

    created() {
        vm = this;
    }

    handleOk() {
        this.data = {};
        this.$emit("change", false);
    }

    handleCancel() {
        this.data = {};
        this.$emit("change", false);
    }
}
