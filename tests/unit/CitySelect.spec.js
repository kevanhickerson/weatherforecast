import { mount } from "@vue/test-utils";
import CitySelect from "@/components/CitySelect.vue";

describe("CitySelect.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(CitySelect);
    expect(wrapper.find("select")).toBeTruthy();

    const citySelectOptions = wrapper
      .findComponent(CitySelect)
      .findAll("option");

    expect(citySelectOptions[0].attributes("value")).toBe(undefined);
    expect(citySelectOptions[0].text()).toBe("");

    expect(citySelectOptions[1].attributes("value")).toBe("6167865");
    expect(citySelectOptions[1].text()).toBe("Toronto, CA");

    expect(citySelectOptions[2].attributes("value")).toBe("6094817");
    expect(citySelectOptions[2].text()).toBe("Ottawa, CA");

    expect(citySelectOptions[3].attributes("value")).toBe("1850147");
    expect(citySelectOptions[3].text()).toBe("Tokyo, JP");
  });

  it("properly sets the model when the city is changed", async () => {
    const wrapper = mount({
      data: function () {
        return {
          localValue: "",
        };
      },
      template: '<city-select v-model="localValue"></city-select>',
      components: {
        "city-select": CitySelect,
      },
    });

    const citySelect = wrapper.findComponent(CitySelect).find("select");

    // Check state before clicking
    expect(wrapper.vm.localValue).toBe("");

    // Click
    await citySelect.setValue("6167865");

    // Check state after clicking
    expect(wrapper.vm.localValue).toBe("6167865");
  });
});
