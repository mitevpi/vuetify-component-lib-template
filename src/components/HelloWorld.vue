<template>
  <div class="hello">
    <h1>Vue Design System</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>

    <p class="typography-running-head">
      Soluptissitio volorem nonsequ aspelit, eveles-sus sant as excea derum
      quam, quiatio. Tur sincipsus doleces dolupist quis ad unturi.
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style lang="scss">
.hello {
  text-align: center;
  font-family: $font-stack;
  color: $dark-gray;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $blue;
}
</style>
