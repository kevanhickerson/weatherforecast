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
        <tr v-for="forecast in forecastPage" :key="forecast.dt">
          <td>{{ getFormattedDate(forecast.dt) }}</td>
          <td>{{ forecast.main.temp }} °C</td>
          <td>{{ forecast.main.temp_min }} °C</td>
          <td>{{ forecast.main.temp_max }} °C</td>
          <td>{{ forecast.wind.speed }} m/s</td>
          <td>{{ forecast.weather[0].description }}</td>
        </tr>
      </tbody>
    </table>
    <button
      v-for="i in numberOfPages"
      :key="i"
      @click="currentPage = i - 1"
      :disabled="currentPage + 1 == i"
    >
      {{ i }}
    </button>
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
  data() {
    return {
      currentPage: 0,
    };
  },
  computed: {
    hasData() {
      return Object.keys(this.forecastData).length > 0;
    },
    numberOfPages() {
      let num = this.forecastData?.list.length ?? 0;
      return num / 10;
    },
    forecastPage() {
      return this.forecastData.list.slice(
        this.currentPage * 10,
        (this.currentPage + 1) * 10
      );
    },
  },
  methods: {
    getFormattedDate(timestamp) {
      let dt = new Date(timestamp * 1000);
      return format(dt, "MMM d ha");
    },
  },
  watch: {
    forecastData: function () {
      this.currentPage = 0;
    },
  },
};
</script>

<style scoped lang="scss">
button {
  margin-right: 8px;
  margin-top: 8px;
}

table {
  border-collapse: collapse;
  background-color: white;
}

th {
  font-weight: normal;
  text-align: left;
}

th,
td {
  width: 120px;
  padding: 10px;
}

tr {
  border-style: solid;
  border-width: 1px;
  padding: 0;
}
</style>
