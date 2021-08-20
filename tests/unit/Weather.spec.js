import { mount } from "@vue/test-utils";
import Weather from "@/components/Weather.vue";

const validWeatherData = {
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  main: {
    temp: 22.72,
    feels_like: 23.4,
    temp_min: 20.44,
    temp_max: 23.57,
    pressure: 1013,
    humidity: 90,
  },
  wind: {
    speed: 1.63,
    deg: 332,
    gust: 1.7,
  },
};

describe("Weather.vue", () => {
  it("renders nothing by default", () => {
    const wrapper = mount(Weather);

    expect(wrapper.findAll(".weather").length).toBe(0);
  });

  it("renders weather data when available", async () => {
    const wrapper = mount(Weather, {
      props: {
        weatherData: validWeatherData,
      },
    });

    expect(wrapper.findAll(".weather").length).toBe(1);
    expect(wrapper.find(".weather .weather__main").text()).toBe("Clouds");
    expect(wrapper.find(".weather .weather__description").text()).toBe(
      "overcast clouds"
    );
    expect(wrapper.find(".weather .weather__temperature").text()).toBe(
      "22.72 °C"
    );
    expect(wrapper.find(".weather .weather__wind").text()).toBe(
      "Wind 1.63 m/s"
    );
  });
});
