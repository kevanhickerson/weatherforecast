<template>
  <div v-if="hasData" class="forecast">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp</th>
          <th>Min Temp</th>
          <th>Max Temp</th>
          <th>Wind</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="forecast in forecastData.list" :key="forecast.dt">
          <td>{{ getFormattedDate(forecast.dt) }}</td>
          <td>{{ forecast.main.temp }} °C</td>
          <td>{{ forecast.main.temp_min }} °C</td>
          <td>{{ forecast.main.temp_max }} °C</td>
          <td>{{ forecast.wind.speed }} m/s</td>
          <td>{{ forecast.weather[0].description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "Forecast",
  props: {
    forecastData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    hasData() {
      return Object.keys(this.forecastData).length > 0;
    },
  },
  methods: {
    getFormattedDate(timestamp) {
      let dt = new Date(timestamp * 1000);
      return format(dt, "MMM d ha");
    },
  },
};
</script>

<style scoped lang="scss"></style>
