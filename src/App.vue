<template>
  <v-app>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Footer: () => import("./components/Footer.vue")
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
