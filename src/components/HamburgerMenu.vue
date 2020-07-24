<template>
  <div class="menu">
    <v-menu ref="menu" offset-y>
      <template v-slot:activator="{ on }">
        <svg
          class="ham hamRotate ham4"
          viewBox="0 0 100 100"
          width="40"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseExit"
          @click="onHamClick"
          v-on="on"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path class="line middle" d="m 70,50 h -40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </template>
      <v-list-item
        v-for="(link, index) in links"
        :key="index"
        class="text-xs-center font-medium"
        @click="toggleAbout(link)"
      >
        {{ link.text }}
      </v-list-item>
    </v-menu>
  </div>
</template>

<script>
// Animated hamburger menu and expand

export default {
  name: 'HamburgerMenu',
  data: () => ({
    /**
     * @vuese
     * The links to display in the hamburger UI.
     */
    links: [
      { text: 'Home', toggle: false },
      { text: 'About', toggle: true },
      { text: 'Feedback', toggle: 'feedback' },
    ],
  }),
  methods: {
    /**
     * @vuese
     * Toggle the current view on the About page.
     * @arg pageType Which type of page to show.
     */
    toggleAbout(pageType) {
      console.log(pageType);
      this.$emit('click');
    },
    onMouseEnter(event) {
      event.target.classList.add('active');
    },
    onMouseExit(event) {
      event.target.classList.remove('active');
    },
    onHamClick(event) {
      if (this.$refs.menu.$refs.content.classList.length > 2) {
        this.onMouseExit(event);
      } else {
        this.onMouseEnter(event);
      }
    },
  },
};
</script>

<style scoped lang="scss">
path {
  pointer-events: none;
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hamRotate.active {
  transform: rotate(45deg);
}

.hamRotate180.active {
  transform: rotate(180deg);
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #545759;
  stroke-width: 5.5;
  stroke-linecap: round;
}

.ham4 .top,
.ham4 .bottom {
  stroke-dasharray: 40 121;
}

.ham4.active .top,
.ham4.active .bottom {
  stroke-dashoffset: -68px;
}
</style>
