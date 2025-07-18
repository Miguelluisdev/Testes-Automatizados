import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in and on the inventory page", () => {
  cy.login();
  cy.visit("https://www.saucedemo.com/v1/inventory.html");
});

When("I open the header menu", () => {
  cy.get(".bm-burger-button > button").click();
});

When("I check the About link visibility and remove the target attribute", () => {
  cy.get("#about_sidebar_link")
    .should("be.visible")
    .invoke("removeAttr", "target");
});

When("I click the Logout link", () => {
  cy.get("#logout_sidebar_link").click();
});

Then("I should see the login button", () => {
  cy.get("#login-button").should("be.visible");
});

Then("the URL should include {string}", (urlPart) => {
  cy.url().should("include", urlPart);
});

