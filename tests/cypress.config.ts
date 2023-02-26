const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    screenshotsFolder: 'reports/screenshots',
    viewportWidth: 1200,
    baseUrl: "https://d39x7kisu5mvy0.cloudfront.net/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.video = false;
      return config;
    },
  },
  env: {
    apiUrl: "https://0bortdj0g9.execute-api.eu-central-1.amazonaws.com"
  }
});
