
import { GoogleSearchPageObject } from "./GoogleSearchPageObject";

export class GetPageObject {
    private googleSearchPageObject: GoogleSearchPageObject;

    constructor(){
        this.googleSearchPageObject =  new GoogleSearchPageObject();
    }
    public getGoogleSearchPageObject() {
        return this.googleSearchPageObject;
    }
}