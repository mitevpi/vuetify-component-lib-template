module.exports = {
  css: {
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
