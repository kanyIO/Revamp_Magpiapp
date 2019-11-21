import { element, by, $, ElementFinder } from "protractor";

export class LoginPage {
    user: ElementFinder;
    password: ElementFinder;
    signin: ElementFinder;

    constructor() {
        this.user = $("input[placeholder='Username or Email']");
        this.password = $("input[type='password']");
        this.signin = element(by.css("button.mb-3.w-100.btn.btn-primary.text-uppercase"));
    }
}
