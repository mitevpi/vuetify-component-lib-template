import { configure, addDecorator } from '@storybook/vue';
import '!style-loader!css-loader!sass-loader!./scss-loader.scss';
import 'vuetify/dist/vuetify.css';
// import '!style-loader!css-loader!@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import "@/plugins/vuetify";

import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

addDecorator(() => ({
  vuetify: new Vuetify(),
  template:
    '<v-app style="background-color: white"><v-content><story/></v-content></v-app>',
}));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
