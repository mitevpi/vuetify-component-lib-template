import Footer from '../src/components/Footer.vue';

export default {
  title: 'Footer',
  parameters: {
    componentSubtitle:
      'Footers with Organisation branding for bottom page rendering.',
  },
};

export const Default = () => ({
  components: { Footer },
  template: '<Footer/>',
});
