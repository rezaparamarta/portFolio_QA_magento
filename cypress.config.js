const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    env: {
      email: "sanbercode53@gmail.com"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});