import { ElementFinder, $, element, by } from "protractor";

export class Logout {
    Settings: ElementFinder;
    Signout: ElementFinder;

    constructor() {
        this.Settings = $("div.btn-group.show");
        // this.Settings = $("button.btn");
        // this.Settings = element(by.cssContainingText("btn-primary dropdown-toggle"));
        // this.Settings = $("//div[@class='mr-2']");
        // this.Settings = $("div[contains(@class, 'mr-2')]");
        // //div[contains(concat(' ', @class, ' '), ' mr-2 ')]
        // $("//div[contains(concat(' ', @class, ' '), ' mr-2 ')]");
        // //div[contains(concat(' ', normalize-space(@class), ' '), ' mr-2 ')]

        // this.Settings = $("button.dropdown-item");
        this.Signout = $("button[value='Logout']");
        // //html/body/app-root/div/ng-component/div/div/nav/div/div/button[2]");
    }
}
