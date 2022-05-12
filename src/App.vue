<script>
import MapDisplay from "@/components/MapDisplay.vue";

export default {
  components: {
    MapDisplay,
  },
};
</script>

<template>
  <header class="has-background-primary">
    <router-link to="/">liftshare</router-link>
  </header>
  <div id="wrapper" class="columns m-0">
    <div class="column is-one-quarter-desktop">
      <router-view />
    </div>
    <div class="column is-hidden-touch p-0">
      <MapDisplay />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

header {
  padding: 20px;
  color: #fff;
  font-weight: 600;
}

header a {
  color: #fff;
  font-size: 1.5rem;
}

a:hover,
a:focus,
a:active {
  text-decoration: underline;
  color: #fff;
}

#wrapper {
  height: calc(100vh - 76px);
}
</style>
