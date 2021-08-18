<template>
  <div class="header">Weather Forecast</div>
  <city-select v-model="selectedCity" />
  {{ selectedCity }}
</template>

<script>
import CitySelect from "@/components/CitySelect";

export default {
  name: "App",
  components: {
    CitySelect,
  },
  data() {
    return {
      selectedCity: "",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  font-size: 3rem;
  font-weight: 500;
}
</style>
