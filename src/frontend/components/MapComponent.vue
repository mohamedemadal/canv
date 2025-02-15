<template>
  <div ref="map" class="map-container"></div>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new google.maps.Map(this.$refs.map, {
        zoom: 10,
        center: { lat: 24.7136, lng: 46.6753 }, // Default center (Riyadh)
      });

      this.locations.forEach((location) => {
        new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          title: location.title,
        });
      });
    },
  },
};
</script>

<style>
.map-container {
  height: 400px;
  width: 100%;
}
</style>
