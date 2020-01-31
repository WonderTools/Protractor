"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GoogleSearchPageObject_1 = require("./GoogleSearchPageObject");
class GetPageObject {
    constructor() {
        this.googleSearchPageObject = new GoogleSearchPageObject_1.GoogleSearchPageObject();
    }
    getGoogleSearchPageObject() {
        return this.googleSearchPageObject;
    }
}
exports.GetPageObject = GetPageObject;
