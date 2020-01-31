"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const GetPageObjects_1 = require("../pages/GetPageObjects");
const getPageObject = new GetPageObjects_1.GetPageObject();
cucumber_1.Given('I go to Google Home Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //since not an angular peoject 
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.get(protractor_1.browser.params.env.baseUrl);
    });
});
cucumber_1.Then('Google Home Page is loaded', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = false;
        yield getPageObject.getGoogleSearchPageObject().ValidateGoogleHomePage();
    });
});
cucumber_1.When('I click on search input and enter {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield getPageObject.getGoogleSearchPageObject().EnterSearchKey(string);
    });
});
cucumber_1.Then('I should see all the search results for {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
