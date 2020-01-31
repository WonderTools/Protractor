

const standardBrowserOptions = [ "--window-size=1920,1080", "--no-sandbox","--disable-dev-shm-usage", "--disable-gpu", "--enable-features=NetworkService", "--incognito"];
const baseUrl= "https://google.com/";

exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome',
      chromeOptions: {
        args: standardBrowserOptions
    },
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      'features/*.feature'
    ],
  
    baseURL: baseUrl,
    cucumberOpts: {
        format: "json:./reports/json/cucumber_report.json",
        require: ["typeScript/stepdefinitions/*.step.js"],
        strict: true
    },
    params: {
        env: {
            baseUrl: baseUrl
        }
    }
  };