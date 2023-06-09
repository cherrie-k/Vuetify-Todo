import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import("../views/Counter.vue"),
  },
  {
    path: "/simple",
    name: "Simple Todo",
    component: () => import("../views/Simple.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Vuetify Todo - ${to.name}`;
  next();
});

export default router;
