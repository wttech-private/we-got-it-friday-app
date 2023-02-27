import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    screenshotsFolder: 'reports/screenshots',
    viewportWidth: 1200,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.video = false;
      return config;
    },
    env: {
      apiUrl: "https://ry0wsrn99d.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
