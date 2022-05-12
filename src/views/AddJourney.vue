<script>
import JourneyForm from "@/components/JourneyForm.vue";

export default {
  components: {
    JourneyForm,
  },
};
</script>

<template>
  <div class="columns">
    <div class="column">
      <h1 class="mb-1">Add Your Journey</h1>
      <p>
        Whether you are looking to Liftshare as a driver or a passenger, listing
        your journey is the best way to find a match.
      </p>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <JourneyForm />
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <article class="message is-warning">
        <div class="message-body">
          <p><strong>Warning From The Developer</strong></p>
          <p>
            Make sure you have added a valid Google Maps API script tag to the
            index.html page otherwise some features may not work.
          </p>
          <br />
          <p>Check the <a href="">Readme on Github</a> for more information.</p>
        </div>
      </article>
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
</style>
