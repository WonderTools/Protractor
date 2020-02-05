import { assert } from "chai";
import { $, browser,Key, ElementFinder, ExpectedConditions as EC,element, By } from "protractor";

const defaultTimeout = 20000;
export class GoogleSearchPageObject {
    public searchTextBox: ElementFinder;
    public protractorURL: ElementFinder;

    constructor() {
        //replcae this with proper xPath
        this.searchTextBox = element(By.xpath("//input[@aria-label='Search']"));
        this.protractorURL = $("/html/body/div[7]/div[3]/div[9]/div[1]/div[2]/div/div[2]/div[2]/div/div/div[1]/div/div[1]/div/div/div[1]/a");
    }

    public async ValidateGoogleHomePage(){
        await browser.wait(EC.presenceOf(this.searchTextBox), defaultTimeout, `safeClick: ${this.searchTextBox.locator()} is not present within ${defaultTimeout} ms`);
    
    }

    public async EnterSearchKey(text: string): Promise<void>{
        const self = this.searchTextBox;
        const alias = self.locator();
        const timeout = defaultTimeout;

        await browser.wait(EC.presenceOf(self), timeout, `safeSendKeys: ${alias} is not present within ${timeout} ms`); 
        await browser.wait(EC.visibilityOf(self), timeout, `safeSendKeys: ${alias} is not visible within ${timeout} ms`);
        await self.sendKeys(text);
        await self.sendKeys(Key.ENTER);
    }

    public async ValidateProtractorURL(){
        const self = this.protractorURL;
        const alias = self.locator();
        const timeout = defaultTimeout;

        await browser.wait(EC.presenceOf(self), timeout, `safeSendKeys: ${alias} is not present within ${timeout} ms`); 
        await browser.wait(EC.visibilityOf(self), timeout, `safeSendKeys: ${alias} is not visible within ${timeout} ms`);
    }
}