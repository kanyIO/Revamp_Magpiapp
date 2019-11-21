import { Given, When, Then } from "cucumber";
import { browser, protractor } from "protractor";
import { Logout } from "../pages/logout.po";
import { async } from "q";

const page4 = new Logout();

Given("I want to logout", async () => {
    browser.get("http://localhost:4200/home/form");
});

When("I select you are logged in as user", { timeout: 3 * 80000 }, async () => {
    await page4.Settings.click();
});

When("select Logout", async () => {
    browser.driver.wait(async () => {
        return page4.Signout.isDisplayed();
    });
    await page4.Signout.click();
});

Then("Logout will occur", async () => {
    //
});
