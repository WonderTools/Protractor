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
const protractor_1 = require("protractor");
const defaultTimeout = 20000;
class GoogleSearchPageObject {
    constructor() {
        //replcae this with proper xPath
        this.searchTextBox = protractor_1.element(protractor_1.By.xpath("//input[@aria-label='Search']"));
        this.protractorURL = protractor_1.$("/html/body/div[7]/div[3]/div[9]/div[1]/div[2]/div/div[2]/div[2]/div/div/div[1]/div/div[1]/div/div/div[1]/a");
    }
    ValidateGoogleHomePage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(this.searchTextBox), defaultTimeout, `safeClick: ${this.searchTextBox.locator()} is not present within ${defaultTimeout} ms`);
        });
    }
    EnterSearchKey(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const self = this.searchTextBox;
            const alias = self.locator();
            const timeout = defaultTimeout;
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(self), timeout, `safeSendKeys: ${alias} is not present within ${timeout} ms`);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(self), timeout, `safeSendKeys: ${alias} is not visible within ${timeout} ms`);
            yield self.sendKeys(text);
            yield self.sendKeys(protractor_1.Key.ENTER);
        });
    }
    ValidateProtractorURL() {
        return __awaiter(this, void 0, void 0, function* () {
            const self = this.protractorURL;
            const alias = self.locator();
            const timeout = defaultTimeout;
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(self), timeout, `safeSendKeys: ${alias} is not present within ${timeout} ms`);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(self), timeout, `safeSendKeys: ${alias} is not visible within ${timeout} ms`);
        });
    }
}
exports.GoogleSearchPageObject = GoogleSearchPageObject;
