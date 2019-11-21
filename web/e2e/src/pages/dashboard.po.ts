import { ElementFinder, $, element, by } from "protractor";

export class dashboard {

    Forms: ElementFinder;
    Reports: ElementFinder;
    Messaging: ElementFinder;
    Outbox: ElementFinder;
    Contacts: ElementFinder;
    Mobile: ElementFinder;
    Langauge: ElementFinder;
    UserSetting: ElementFinder;

    constructor() {
        var spans = element.all(by.deepCss('span'));
        //  expect(spans.count()).toEqual(3);
        this.Forms = element(by.xpath("//ul/li[1]/a"));
        this.Reports = $("");
        this.Messaging = $("");
        this.UserSetting = $("div.mr-2");
 }

}
