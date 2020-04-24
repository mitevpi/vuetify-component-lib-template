module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
