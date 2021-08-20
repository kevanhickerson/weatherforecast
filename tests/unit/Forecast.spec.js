import { mount } from "@vue/test-utils";
import Forecast from "@/components/Forecast.vue";

const validForecastData = {
  forecast: "test",
};

describe("Weather.vue", () => {
  it("renders nothing by default", () => {
    const wrapper = mount(Forecast);

    expect(wrapper.findAll(".forecast").length).toBe(0);
  });

  it("renders weather data when available", async () => {
    const wrapper = mount(Forecast, {
      props: {
        forecastData: validForecastData,
      },
    });

    expect(wrapper.findAll(".forecast").length).toBe(1);
  });
});
