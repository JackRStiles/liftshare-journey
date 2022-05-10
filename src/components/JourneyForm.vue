<template>
  <div class="field">
    <label class="label">Journey start</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="e.g. Postcode, Street Name"
        v-model="journey.origin"
      />
    </div>
  </div>
  <div class="field">
    <label class="label">Destination</label>
    <div class="control">
      <input
        class="input"
        type="text"
        placeholder="e.g. Postcode, Street Name"
        v-model="journey.destination"
      />
    </div>
  </div>
  <div class="field">
    <label class="checkbox">
      <input type="checkbox" v-model="journey.returnJourney" />
      This is a return journey (round trip)
    </label>
  </div>
</template>

<script>
import { useJourneyStore } from "@/stores/journey";

export default {
  name: "JourneyForm",
  setup() {
    const journey = useJourneyStore();
    return { journey };
  },
};
</script>

<style></style>
