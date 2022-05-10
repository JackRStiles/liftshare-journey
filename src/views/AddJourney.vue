<script>
import JourneyForm from "@/components/JourneyForm.vue";

export default {
  components: {
    JourneyForm,
  },
};
</script>

<template>
  <div id="wrapper">
    <div class="columns">
      <div class="column">
        <h1 class="mb-1">Add Your Journey</h1>
        <p>
          Whether you are looking to Liftshare as a driver or a passenger,
          listing your journey is the best way to find a match.
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <JourneyForm />
      </div>
    </div>
    <div class="columns navigation">
      <div class="column has-text-right">
        <router-link class="button is-primary" to="/details">Next</router-link>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  font-size: 1.5rem;
  font-weight: 600;
}

a.button:hover {
  text-decoration: none;
}

#wrapper {
  height: calc(100vh - 108px);
}
</style>
