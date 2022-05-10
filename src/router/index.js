import { createRouter, createWebHashHistory } from "vue-router";
import AddJourney from "../views/AddJourney.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AddJourney,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
