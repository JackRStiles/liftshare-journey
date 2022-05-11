<template>
  <div class="field">
    <label class="label">Journey start</label>
    <div class="control">
      <input
        id="origin"
        class="input"
        type="text"
        placeholder="e.g. Postcode, Street Name"
        @change="updateOrigin"
      />
    </div>
  </div>
  <div class="field">
    <label class="label">Destination</label>
    <div class="control">
      <input
        id="destination"
        class="input"
        type="text"
        placeholder="e.g. Postcode, Street Name"
        v-model.lazy="journey.destination"
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
  mounted() {
    // eslint-disable-next-line
    var originAC = new google.maps.places.Autocomplete(
      document.getElementById("origin")
    );

    originAC.setComponentRestrictions({
      country: ["gb"],
    });

    // eslint-disable-next-line
    var destinationAC = new google.maps.places.Autocomplete(
      document.getElementById("destination")
    );

    destinationAC.setComponentRestrictions({
      country: ["gb"],
    });
  },
  methods: {
    updateOrigin() {
      let value = document.getElementById("origin").value;
      this.journey.$patch({
        origin: value,
      });
    },
    updateDestination() {
      let value = document.getElementById("destination").value;
      this.journey.$patch({
        destination: value,
      });
    },
  },
};
</script>

<style></style>
