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
      <h1 class="mb-0">Thank You!</h1>
      <p>Your journey has been posted successfully</p>
      <p>
        <router-link class="router" to="/">Add another journey</router-link>
      </p>
    </div>
  </div>
</template>

<style></style>
