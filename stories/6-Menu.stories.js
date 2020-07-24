import HamburgerMenu from '../src/components/HamburgerMenu.vue';

export default {
  title: 'Menu',
  parameters: {
    componentSubtitle: 'Various types of menus and navigation components.',
  },
};

export const Hamburger = () => ({
  components: { HamburgerMenu },
  template: '<HamburgerMenu/>',
});
