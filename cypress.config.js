const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://with-bugs.practicesoftwaretesting.com",
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
