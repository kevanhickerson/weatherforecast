<template>
  <div class="header">Weather Forecast</div>
  <city-select v-model="selectedCity" @change="getWeather" />
  <weather :weatherData="weather" />
  <button
    v-if="hasWeatherData"
    @click="toggleForecast"
    :disabled="loadingForecast"
  >
    {{ buttonText }}
  </button>
  <forecast :forecastData="forecast" />
</template>

<script>
import axios from "axios";
import CitySelect from "@/components/CitySelect";
import Forecast from "@/components/Forecast";
import Weather from "@/components/Weather";

export default {
  name: "App",
  components: {
    CitySelect,
    Forecast,
    Weather,
  },
  data() {
    return {
      forecast: {},
      loadingForecast: false,
      selectedCity: "",
      units: "metric",
      weather: {},
    };
  },
  computed: {
    hasWeatherData() {
      return Object.keys(this.weather).length > 0;
    },
    hasForecastData() {
      return Object.keys(this.forecast).length > 0;
    },
    buttonText() {
      if (this.hasForecastData) {
        return "Close";
      }
      return "See Forecast";
    },
  },
  methods: {
    async getWeather() {
      // Reset the weather object to be empty while we try to load new data
      this.forecast = {};
      this.weather = {};

      try {
        const res = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?id=${this.selectedCity}&units=${this.units}&appid=${process.env.VUE_APP_APPID}`
        );
        this.weather = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    async toggleForecast() {
      if (this.hasForecastData) {
        this.forecast = {};
      } else {
        try {
          this.loadingForecast = true;
          const res = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?id=${this.selectedCity}&units=${this.units}&appid=${process.env.VUE_APP_APPID}`
          );
          this.forecast = res.data;
        } catch (error) {
          console.error(error);
        } finally {
          this.loadingForecast = false;
        }
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
