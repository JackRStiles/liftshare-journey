<script>
import MapDisplay from "@/components/MapDisplay.vue";

export default {
  components: {
    MapDisplay,
  },
};
</script>

<template>
  <header class="has-background-primary p-3">
    <router-link to="/">liftshare</router-link>
  </header>
  <div id="wrapper" class="columns m-0">
    <div class="column is-one-quarter-desktop py-4 px-4">
      <router-view />
    </div>
    <div id="mapWrapper" class="column is-hidden-touch p-0">
      <MapDisplay />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

body {
  letter-spacing: -0.5px;
  font-weight: 300;
}

.label,
strong {
  font-weight: 500;
}

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

#mapWrapper {
  background-image: url("@/assets/map-location-dot-solid.svg");
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: center;
}

.router:hover {
  color: #2641c6;
  text-decoration: underline;
}
</style>
