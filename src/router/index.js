import { createRouter, createWebHashHistory } from "vue-router";
import AddJourney from "@/views/AddJourney.vue";
import AddDetails from "@/views/AddDetails.vue";
import LiftPosted from "@/views/JourneyAdded.vue";
import LiftNotPosted from "@/views/JourneyNotAdded.vue";

const routes = [
  {
    path: "/",
    redirect: "/lift/new",
  },
  {
    path: "/lift",
    redirect: "/lift/new",
  },
  {
    path: "/lift/new",
    component: AddJourney,
  },
  {
    path: "/lift/details",
    component: AddDetails,
  },
  {
    path: "/lift/posted",
    component: LiftPosted,
  },
  {
    path: "/lift/not-posted",
    component: LiftNotPosted,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
