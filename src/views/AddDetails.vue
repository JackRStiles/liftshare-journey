<script>
import { useJourneyStore } from "@/stores/journey";
import DetailsForm from "../components/DetailsForm.vue";

export default {
  components: {
    DetailsForm,
  },
  setup() {
    const journey = useJourneyStore();
    return { journey };
  },
};
</script>

<template>
  <div class="column has-text-left">
    <router-link class="router" to="/">Back</router-link>
  </div>
  <div class="columns content">
    <div class="column">
      <div class="card">
        <div class="card-content">
          <h2>Journey Details</h2>
          <p>
            Travelling from {{ journey.origin }} to {{ journey.destination }}.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="columns content">
    <div class="column">
      <DetailsForm />
    </div>
  </div>
</template>

<style></style>
