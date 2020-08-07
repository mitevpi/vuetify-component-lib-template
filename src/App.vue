<template>
  <v-app>
    <hello-world />
    <Footer />
    <Selection />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Footer: () => import("./components/Footer.vue"),
    HelloWorld: () => import("./components/HelloWorld.vue"),
    Selection: () => import("./components/Selection.vue"),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
