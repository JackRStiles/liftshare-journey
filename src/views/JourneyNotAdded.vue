<script>
import { useJourneyStore } from "@/stores/journey";

export default {
  setup() {
    const journey = useJourneyStore();
    return { journey };
  },
};
</script>

<template>
  <div class="columns content">
    <div class="column">
      <h1 class="mb-0">Something Went Wrong!</h1>
      <p>Your journey has not been posted successfully.</p>
      <router-link class="router" to="/">Add another journey</router-link>
    </div>
  </div>
</template>

<style></style>
