import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "app",
        component: () => import("@/views/app"),
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/app/home"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
