import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Edit from "../views/EditChart.vue";
import LinkProducts from "../views/LinkProducts.vue";
import Plans from "../views/Plans.vue";
import Icons from "../views/Icons.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/help",
    name: "Help",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Help.vue"),
  },
  {
    //path: "/edit/:source/:chart_id",
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/templates",
    name: "Templates",
    component: () => import("../views/Templates.vue"),
  },
  {
    path: "/link",
    name: "LinkProducts",
    component: LinkProducts,
  },
  {
    path: "/plans",
    name: "Plans",
    component: Plans,
  },
  {
    path: "/icons",
    name: "Icons",
    component: Icons,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
