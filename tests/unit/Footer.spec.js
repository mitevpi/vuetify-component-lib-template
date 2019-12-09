import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Footer from "../../src/components/Footer.vue";

Vue.use(Vuetify);

describe("Footer.vue", () => {
  it("is called", () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.name()).toBe("Footer");
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
