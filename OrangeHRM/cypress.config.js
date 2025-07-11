const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: process.env.edv.ID,
  retries: {
    runMode: 2, 
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
