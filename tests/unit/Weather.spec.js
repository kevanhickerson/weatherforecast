import { mount } from "@vue/test-utils";
import Weather from "@/components/Weather.vue";

describe("Weather.vue", () => {
  it("renders nothing by default", () => {
    const wrapper = mount(Weather);

    expect(wrapper.findAll("div").length).toBe(0);
  });

  it("renders weather data when available", async () => {
    const wrapper = mount(Weather, {
      props: {
        weatherData: {
          test: "test",
        },
      },
    });

    expect(wrapper.findAll("div").length).toBe(1);
  });
});
