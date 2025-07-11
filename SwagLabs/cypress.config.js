const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com/v1/",
    env: {
      username: process.env.NAME,
      password: process.env.PASSWORD,
    },
    setupNodeEvents(on, config) {},
  },
});
