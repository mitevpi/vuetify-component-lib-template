module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
