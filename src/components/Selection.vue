<template>
  <div>
    <span>Test</span>
    <v-select label="Selection Test" :items="items" />
  </div>
</template>

<script>
export default {
  name: "SelectionVue",
  data: () => ({
    items: ["one", "two", "three"],
  }),
};
</script>

<style scoped></style>
