import { defineStore } from "pinia";

export const useJourneyStore = defineStore({
  id: "journey",
  state: () => ({
    origin: "Norwich, UK",
    originLat: 52.6308859,
    originLon: 1.297355,
    destination: "London, UK",
    destinationLat: 51.5073509,
    destinationLon: -0.1277583,
    returnJourney: false,
  }),
});
