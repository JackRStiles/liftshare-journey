<template>
  <!-- 
    Added a submit.prevent handler to allow for greater validation at some point.

    The text boxes originally used v-model.lazy but this didn't seem to store the location chosen via the autocomplete, just what was in the field before selection.
  -->
  <form id="form" @submit.prevent="validateForm">
    <div class="field">
      <label class="label">Journey start</label>
      <div class="control">
        <input
          id="origin"
          class="input"
          type="text"
          placeholder="e.g. Postcode, Street Name"
          @change="updateOrigin"
          required
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
          @change="updateDestination"
          required
        />
      </div>
    </div>
    <div class="field">
      <label class="checkbox">
        <input type="checkbox" v-model="journey.returnJourney" />
        This is a return journey (round trip)
      </label>
    </div>

    <!-- 
      TODO Add journey distance display that watches the store for a value 
    -->

    <div class="columns navigation">
      <div class="column has-text-right">
        <button class="button is-primary" type="submit">Next</button>
      </div>
    </div>
  </form>
</template>

<script>
import router from "@/router";
import { useJourneyStore } from "@/stores/journey";

export default {
  name: "JourneyForm",
  setup() {
    const journey = useJourneyStore();
    return { journey };
  },
  mounted() {
    // Adds Google's auto complete feature to the two text fields and limits
    // them to GB locations.
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

    // Prevents the enter key from submitting the form, which stops the from
    // changing page prematurely.
    var element = document.getElementById("form");
    element.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
  },
  methods: {
    // Methods to add the selected address to the store.
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
    validateForm() {
      // TODO Add more form validation
      router.push("/details");
    },
  },
};
</script>

<style></style>
