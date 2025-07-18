import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("I fill in the username with {string}", (username) => {
  cy.get('[data-test="username"]').type(username);
});

When("I fill in the password with {string}", (password) => {
  cy.get('[data-test="password"]').type(password);
});

When("I click the login button", () => {
  cy.get('[data-test="login-button"]').click();
});



Then("I should see an error message", () => {
  cy.get('[data-test="error"]').should("be.visible");
});
