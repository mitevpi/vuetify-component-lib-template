import AnimatedLoading from '../src/components/AnimatedLoading.vue';

export default {
  title: 'Loading',
  parameters: {
    componentSubtitle:
      'Loading screens, progress bars, and other loading-related components.',
  },
};

export const DigitalLogo = () => ({
  components: { AnimatedLoading },
  template: "<AnimatedLoading :loadingDialog='true'/>",
});
