const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's9867j',
  e2e: {
    baseUrl: "http://127.0.0.1:5500/src/index",
    setupNodeEvents(on, config) {
    
    }
  }
});
