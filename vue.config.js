module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        sassOptions: {
          data: '@import "@/styles/colors.scss";'
        }
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
