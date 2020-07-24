import { mount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Footer from '../../src/components/Footer.vue';

Vue.use(Vuetify);

const localVue = createLocalVue();
const vuetify = new Vuetify();

const wrapper = mount(Footer, {
  localVue,
  vuetify,
});

describe('Footer.vue', () => {
  beforeEach(() => {});

  it('is called Footer', () => {
    expect(wrapper.name()).toBe('Footer');
  });

  it('renders github, linkedin, & twitter buttons', () => {
    expect(wrapper.findAll('.v-btn').length).toEqual(3);
    expect(wrapper.findAll('#btn-footer-github').length).toEqual(1);
    expect(wrapper.findAll('#btn-footer-linkedin').length).toEqual(1);
    expect(wrapper.findAll('#btn-footer-twitter').length).toEqual(1);
  });
});
