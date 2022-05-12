<script>
import { useJourneyStore } from "@/stores/journey";

export default {
  name: "MapDisplay",
  setup() {
    // Access the journey store and watch it for changes
    let journey = useJourneyStore();
    journey.$subscribe(() => {
      // Checks to see if the origin and destination are in the store
      if (journey.origin && journey.destination) {
        // Assigns all the parameters and variables needed for the routing to
        // work, then calls the directions service to see if the route is valid.
        // If so, it will then render the route.
        // eslint-disable-next-line
        var directionsService = new google.maps.DirectionsService();
        // eslint-disable-next-line
        var directionsRenderer = new google.maps.DirectionsRenderer();
        var center = { lat: 54.251186, lng: -4.463196 };
        var mapOptions = {
          zoom: 6,
          center: center,
        };
        // eslint-disable-next-line
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        directionsRenderer.setMap(map);
        var start = journey.origin;
        var end = journey.destination;
        var request = {
          origin: start,
          destination: end,
          travelMode: "DRIVING",
        };
        directionsService.route(request, function (result, status) {
          if (status == "OK") {
            directionsRenderer.setDirections(result);
          }
        });

        // TODO Add distance calculation and add the value to the store.
      }
    });
    // Returns the journey store to be used in the component
    return { journey };
  },
  mounted() {
    // Renders the initial map when the component is mounted.
    var center = { lat: 54.251186, lng: -4.463196 };
    var mapOptions = {
      zoom: 6,
      center: center,
    };

    // eslint-disable-next-line
    new google.maps.Map(document.getElementById("map"), mapOptions);
  },
};
</script>

<template>
  <div id="map"></div>
</template>

<style>
#map {
  height: 100%;
  width: 100%;
}
</style>
