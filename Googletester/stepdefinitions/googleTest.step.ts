import { Given,Then,When } from "cucumber";
import { browser,By,element,ExpectedConditions } from "protractor";
import { GetPageObject } from "../pages/GetPageObjects";
const getPageObject: GetPageObject = new GetPageObject();

   Given('I go to Google Home Page', async function () {
     //since not an angular peoject 
      browser.ignoreSynchronization = true;
      await browser.get(browser.params.env.baseUrl);
    });
    
    Then('Google Home Page is loaded', async function () {
      browser.ignoreSynchronization = false;
      await getPageObject.getGoogleSearchPageObject().ValidateGoogleHomePage();
    });
    When('I click on search input and enter {string}', async function (string) {
      await getPageObject.getGoogleSearchPageObject().EnterSearchKey(string);
    });
    Then('I should see all the search results for {string}', function (string) {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    });