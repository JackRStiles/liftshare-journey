<script>
import { useJourneyStore } from "@/stores/journey";

export default {
  name: "MapDisplay",
  setup() {
    let journey = useJourneyStore();
    journey.$subscribe(() => {
      if (journey.destination) {
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
      }
    });
    return { journey };
  },
  mounted() {
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
