import Vue from "vue";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import "@/assets/styles";
import Antd from "ant-design-vue";
import dayjs from "dayjs";
import zhcn from "dayjs/locale/zh-cn";
dayjs.locale(zhcn);

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require("@/assets/image/no-data.png"),
    loading: require("@/assets/image/loading.gif"),
    attempt: 1,
    filter: {
        webp(listener: any, options: any) {
            if (!options.supportWebp) return;
            if (listener.src === null) listener.src = "";
            if (listener.src) {
                listener.src = "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/img" + listener.src;
            }
        },
    },
});
new Vue({
    router,
    store,
    template: "<div id='app'><router-view /></div>",
}).$mount("#app");
