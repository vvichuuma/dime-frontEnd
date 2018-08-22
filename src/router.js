import Vue from "vue";
import Router from "vue-router";
import SpendW from "./views/SpendW.vue";
import SpendG from "./views/SpendG.vue";
import Home from "./views/Home.vue";
import SaveW from "./views/SaveW.vue";
import SaveG from "./views/SaveG.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/spend_w",
      name: "spendw",
      component: SpendW
    },
    {
      path: "/save_w",
      name: "savew",
      component: SaveW
    },
    {
      path: "/save_g",
      name: "saveg",
      component: SaveG
    },

    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/spend_g",
      name: "spendg",
      component: SpendG
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
