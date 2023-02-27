import { defineConfig } from 'cypress';
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    baseUrl: "https://d39x7kisu5mvy0.cloudfront.net/",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      config.video = false;
      return config;
    },
    env: {
      allure: true,
      apiUrl: "https://0bortdj0g9.execute-api.eu-central-1.amazonaws.com"
    }
  }
});
