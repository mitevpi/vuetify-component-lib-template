<template>
  <div>
    <v-layout footer-bottom>
      <!-- Organisation Digital Logo & Link -->
      <v-flex xs6>
        <a href="https://github.com/mitevpi">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            class="image-center-vertical"
            height="18"
            alt="Organisation"
          />
        </a>
      </v-flex>

      <!-- Social Media Icons -->
      <v-flex
        xs6
        shrink
        style="text-align: right;"
        href="https://github.com/mitevpi"
      >
        <v-btn
          id="btn-footer-twitter"
          ma-0
          pa-0
          text
          icon
          color="gray"
          href="https://twitter.com/mitevpi"
        >
          <v-icon ma-0 pa-0 size="20px">fab fa-twitter</v-icon>
        </v-btn>
        <v-btn
          id="btn-footer-linkedin"
          ma-0
          pa-0
          text
          icon
          color="gray"
          href="https://www.linkedin.com/in/petar-mitev/"
        >
          <v-icon ma-0 pa-0 size="20px">fab fa-linkedin</v-icon>
        </v-btn>
        <v-btn
          id="btn-footer-github"
          ma-0
          pa-0
          text
          icon
          color="gray"
          href="https://github.com/mitevpi"
        >
          <v-icon ma-0 pa-0 size="20px">fab fa-github</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
/**
 Standard Organisation Footer
 * */
export default {
  name: 'Footer',
  components: {},
  data: () => ({}),
};
</script>

<style scoped>
.footer-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.image-center-vertical {
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  padding-left: 1%;
}
</style>
