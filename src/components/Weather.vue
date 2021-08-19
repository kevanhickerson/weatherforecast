<template>
  <div v-if="hasData">Weather Data</div>
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

<style scoped lang="scss"></style>
