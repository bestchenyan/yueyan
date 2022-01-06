import Vue from "vue";
import router from "./router";
import store from "./store";

import "@/assets/styles";
import Antd from "ant-design-vue";
import dayjs from "dayjs";
import zhcn from "dayjs/locale/zh-cn";
dayjs.locale(zhcn);

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
    router,
    store,
    template: "<div id='app'><router-view /></div>",
}).$mount("#app");
