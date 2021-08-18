import { shallowMount } from "@vue/test-utils";
import CitySelect from "@/components/CitySelect.vue";

describe("CitySelect.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(CitySelect, {});
    expect(wrapper.find("select")).toBeTruthy();
  });
});
