const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url:"http://localhost:4200/"
  },
  defaultCommandTimeout: 6000,
  retries: {
    runMode: 1
    },
    projectId: "56smfc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});

