<template>
  <div>
    <!-- LOADING DIALOGUE -->
    <v-dialog v-model="loadingDialog" hide-overlay persistent width="300">
      <v-card color="green" dark>
        <v-img :src="require('../assets/animatedLogo.gif')" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// Modal pop-up to show loading progress

export default {
  name: 'AnimatedLoading',
  props: {
    // whether or not is loading
    loadingDialog: Boolean,
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 0 !important;
  background: transparent;
}
.v-img {
  mix-blend-mode: multiply;
  background: transparent;
}
</style>
