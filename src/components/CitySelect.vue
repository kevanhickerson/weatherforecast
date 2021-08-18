<template>
  <div>
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option selected disabled></option>
      <option
        v-for="location in cities"
        :key="location.id"
        :value="location.id"
      >
        {{ getLabel(location.city, location.country) }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CitySelect",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
  },
  data() {
    return {
      selected: "",
      cities: [
        {
          id: 6167865,
          city: "Toronto",
          country: "CA",
        },
        {
          id: 6094817,
          city: "Ottawa",
          country: "CA",
        },
        {
          id: 1850147,
          city: "Tokyo",
          country: "JP",
        },
      ],
    };
  },
  methods: {
    getLabel(city, country) {
      return `${city}, ${country}`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
