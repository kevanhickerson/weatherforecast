import { mount } from "@vue/test-utils";
import Forecast from "@/components/Forecast.vue";
import { fullForecast } from "./forecastData";

describe("Weather.vue", () => {
  it("renders nothing by default", () => {
    const wrapper = mount(Forecast);

    expect(wrapper.findAll(".forecast").length).toBe(0);
  });

  it("renders weather data when available", async () => {
    const wrapper = mount(Forecast, {
      props: {
        forecastData: fullForecast,
      },
    });

    let rows = wrapper.findAll("tbody tr");
    let row1 = rows[0].findAll("td");
    let row2 = rows[1].findAll("td");
    let buttons = wrapper.findAll("button");

    // Component Exists
    expect(wrapper.findAll(".forecast").length).toBe(1);

    // Rows Exist
    expect(rows.length).toBe(10);
    expect(row1[0].text()).toBe("Aug 20 11AM");
    expect(row1[1].text()).toBe("28.35 °C");
    expect(row1[2].text()).toBe("28.35 °C");
    expect(row1[3].text()).toBe("29.88 °C");
    expect(row1[4].text()).toBe("0.66 m/s");
    expect(row1[5].text()).toBe("clear sky");
    expect(row2[0].text()).toBe("Aug 20 2PM");
    expect(row2[1].text()).toBe("29.72 °C");
    expect(row2[2].text()).toBe("29.72 °C");
    expect(row2[3].text()).toBe("30.79 °C");
    expect(row2[4].text()).toBe("1.57 m/s");
    expect(row2[5].text()).toBe("few clouds");

    // Buttons Exist
    expect(buttons.length).toBe(4);
    expect(buttons[0].text()).toBe("1");
    expect(buttons[1].text()).toBe("2");
    expect(buttons[2].text()).toBe("3");
    expect(buttons[3].text()).toBe("4");
  });
});
