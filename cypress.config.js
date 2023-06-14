const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1280,
  defaultCommandTimeout: 9000,
  pageLoadTimeout: 10000,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 0,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  env: {
    api_url: 'https://www.automationexercise.com/',
    mobileViewportWidthBreakpoint: 414,
    myName: 'Ana',
    email: 'testersantos85@gmail.com',
    password: '12345678',
    silenceCommandLog: false,
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      if (config.testingType === 'component') {
        // Your project's Webpack configuration
        //const webpackConfig = require('../../webpack.config.ts').default;
        on('dev-server:start', (options) => startDevServer({ options, webpackConfig }));
      }

      return config;
    },
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config)
    // },
    baseUrl: 'https://www.automationexercise.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  }
})