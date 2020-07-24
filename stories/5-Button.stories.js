// import Vue from 'vue';
import { action } from '@storybook/addon-actions';

import MyButton from './MyButton';

export default {
  title: 'Buttons',
  parameters: {
    componentSubtitle: 'Various buttons & button styles.',
  },
};

export const textTest = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const emojiTest = () => ({
  components: { MyButton },
  template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  methods: { action: action('clicked') },
});
