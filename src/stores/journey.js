import { defineStore } from "pinia";

export const useJourneyStore = defineStore({
  id: "journey",
  state: () => ({
    origin: "",
    destination: "",
    returnBool: false,
    depart: "",
    return: "",
  }),
});
