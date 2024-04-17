import { defineConfig } from "cypress";


export default defineConfig({
  projectId: "otxmsh",
  e2e: {
    baseUrl: 'http://localhost:3000/',
    viewportWidth: 1350,
    viewportHeight: 927,
    testIsolation: true,
    experimentalRunAllSpecs: true,
    chromeWebSecurity: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    screenshotOnRunFailure: false,
    video: false,
    experimentalMemoryManagement: true,
    retries: { "runMode": 2, "openMode": 2 },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
