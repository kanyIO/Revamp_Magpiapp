import { Given, When, Then } from "cucumber";
import { browser, protractor } from "protractor";
import { LoginPage } from "../pages/login.po";

const page2 = new LoginPage();

Given("I am on the Login Page", async () => {
    browser.waitForAngularEnabled(false);
    await browser.get("http://localhost:4200/login");
});

When("I enter {string} and {string}", async (user, pass) => {
    await page2.user.sendKeys(user);
    await page2.password.sendKeys(pass);
});

Then("Login will occur", async () => {
return (await page2.signin.getWebElement()).click();
    //await page2.signin.click();
});
