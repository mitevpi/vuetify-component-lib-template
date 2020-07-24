import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import HelloWorld from '../../src/components/HelloWorld.vue';

Vue.use(Vuetify);

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Vue Design System';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toContain(msg);
  });
});
