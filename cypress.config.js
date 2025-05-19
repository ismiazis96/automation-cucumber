const { defineConfig } = require("cypress");
const path = require("path");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  // reporter: "cypress-mochawesome-reporter", // ✅ Di sini
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: "My Test Report",
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   overwrite: false,
  //   html: true,
  //   json: true
  // },

  e2e: {
     setupNodeEvents(on, config) {
       addCucumberPreprocessorPlugin(on, config);

      // Mochawesome Reporter register

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    specPattern: "cypress/e2e/**/*.feature",
    stepDefinitions: path.join(__dirname, "cypress/e2e/saucedemo/step_definitions"),
    // supportFile: "cypress/support/e2e.js",
  },
});