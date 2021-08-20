<template>
  <div v-if="hasData" class="weather">
    <div class="weather__main">{{ weatherData.weather[0].main }}</div>
    <div class="weather__description">
      {{ weatherData.weather[0].description }}
    </div>
    <div class="weather__temperature">{{ weatherData.main.temp }} °C</div>
    <div class="weather__wind">Wind {{ weatherData.wind.speed }} m/s</div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    weatherData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    hasData() {
      return Object.keys(this.weatherData).length > 0;
    },
  },
};
</script>

<style scoped lang="scss">
.weather__description {
  margin-bottom: 16px;
}
</style>
