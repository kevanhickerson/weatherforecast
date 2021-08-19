<template>
  <div class="header">Weather Forecast</div>
  <city-select v-model="selectedCity" @change="getWeather" />
</template>

<script>
import axios from "axios";
import CitySelect from "@/components/CitySelect";

export default {
  name: "App",
  components: {
    CitySelect,
  },
  data() {
    return {
      selectedCity: "",
      weather: {},
    };
  },
  methods: {
    async getWeather() {
      // Reset the weather object to be empty while we try to load new data
      this.weather = {};

      try {
        this.weather = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?id=${this.selectedCity}&appid=${process.env.VUE_APP_APPID}`
        );
        console.log(this.weather.data);
      } catch (error) {
        console.error(error);
      }
    },
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
