<template>
  <v-app>
    <hello-world />
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    Footer: () => import('./components/Footer.vue'),
    HelloWorld: () => import('./components/HelloWorld.vue'),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
