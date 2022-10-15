import Vue from "vue";
import VueRouter from "vue-router";
import Employees from "../views/Employees.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/employees",
    name: "Employees",
    component: Employees,
  },
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
