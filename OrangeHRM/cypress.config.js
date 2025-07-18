const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const fs = require("fs-extra");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.{js,ts}"],
    supportFile: "cypress/support/e2e.js",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on("before:run", () => {
        fs.emptyDirSync("cypress/sessions");
      });

      return config;
    },
  },
});
