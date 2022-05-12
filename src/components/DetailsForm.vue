<script>
import router from "@/router";
import { useJourneyStore } from "@/stores/journey";

export default {
  name: "DetailsForm",
  setup() {
    const journey = useJourneyStore();
    return { journey };
  },
  methods: {
    submitForm() {
      const data = {
        origin: this.journey.origin,
        destination: this.journey.destination,
        depart: this.journey.depart,
        returnBool: this.journey.returnBool,
        return: this.journey.return,
      };

      console.log("Posting Data...");
      console.log(data);

      // This is an example of posting data using the fetch api rather than an
      // XMLHttpRequest. I used the fetch api as it achieves the same result
      // but I find it cleaner to write.
      //
      // As there is no real loaction to post it to, it will fail the post and
      // be caught.
      fetch("https://api.example.com/journey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success: ", data);
          router.push("/lift/posted");
        })
        .catch((error) => {
          console.error("Error", error);
          router.push("/lift/not-posted");
        });

      //console.log(this.journey.depart);
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">Departure Date &amp; Time</label>
      <div class="control">
        <input
          id="departDate"
          class="input"
          type="datetime-local"
          required
          v-model="journey.depart"
        />
      </div>
    </div>
    <div class="field" v-if="journey.returnBool == true">
      <label class="label">Return Date &amp; Time</label>
      <div class="control">
        <input
          id="returnDate"
          class="input"
          type="datetime-local"
          required
          v-model="journey.return"
        />
      </div>
    </div>
    <div class="columns navigation">
      <div class="column is-narrow-touch has-text-right">
        <button class="button is-primary" type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>

<style></style>
