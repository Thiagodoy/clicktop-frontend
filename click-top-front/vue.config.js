const path = require("path");

module.exports = {
  runtimeCompiler:false,

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  },

  lintOnSave: false
};
