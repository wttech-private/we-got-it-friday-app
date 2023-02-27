import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    screenshotsFolder: 'reports/screenshots',
    viewportWidth: 1200,
    baseUrl: "https://dwwsfgcsv3q4k.cloudfront.net",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.video = false;
      return config;
    },
    env: {
      apiUrl: "https://zcg6pnou4b.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
