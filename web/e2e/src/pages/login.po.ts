import { element, by, $, ElementFinder } from "protractor";

export class LoginPage {
    user: ElementFinder;
    password: ElementFinder;
    signin: ElementFinder;

    constructor() {
        this.user = $("input[placeholder='Username or Email']");
        this.password = $("input[type='password']");
        this.signin = $("button[type='button']");
    }
}
