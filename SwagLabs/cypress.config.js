const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const fs = require("fs-extra");
require("dotenv").config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/",
    env: {
      username: process.env.NAME,
      password: process.env.PASSWORD,
    },
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.{js,ts}"],
    supportFile: "cypress/support/e2e.js",

    async setupNodeEvents(on, config) {
      // ✅ Plugin do Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // ✅ Esbuild para interpretar arquivos .feature
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // ✅ Limpeza de sessões antes de rodar os testes
      on("before:run", () => {
        fs.emptyDirSync("cypress/sessions");
      });

      return config;
    },
  },
});
