const { defineConfig } = require("cypress");
// "component": {
//   "devServer": {
//     "framework": "nuxt",
//     "bundler": "webpack"
//   }
// }
module.exports = defineConfig({
  component: {
    devServer: {
          framework: "nuxt",
          bundler: "webpack"
        }
  },
})

// module.exports = defineConfig({
//   fixturesFolder: "tests/e2e/fixtures",
//   screenshotsFolder: "tests/e2e/screenshots",
//   videosFolder: "tests/e2e/videos",
//   downloadsFolder: "tests/e2e/downloads",
//   projectId: "dn63qg",
//   integrationFolder: "test/cypress/integration",
//   pluginsFile: "test/cypress/plugins/index.js",

//   e2e: {
//     supportFile: "test/cypress/support/index.js",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
