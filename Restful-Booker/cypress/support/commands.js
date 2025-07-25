Cypress.Commands.add("login", () => {
  cy.visit("https://bookcart.azurewebsites.net/login");
  cy.get("#mat-input-0").should("be.visible").type("ML");
  cy.get("#mat-input-1").should("be.visible").type("SenhaForte1");
  cy.get(".mat-mdc-card-actions > .mdc-button > .mdc-button__label").click();
});

Cypress.Commands.add("toggleIcon", () => {
  cy.get("#mat-input-1")
    .should("be.visible")
    .should("have.attr", "type", "password")
    .type("SenhaForte1");

  cy.get(".mat-mdc-form-field-icon-suffix > .mat-icon").click();

  cy.get("#mat-input-1").should("have.attr", "type", "text");

  cy.get(".mat-mdc-form-field-icon-suffix > .mat-icon").click();

  cy.get("#mat-input-1").should("have.attr", "type", "password");
});

Cypress.Commands.add("clearCart", () => {
  cy.intercept("DELETE", "/api/shoppingcart/11117/2").as("deleteCart");
  cy.get(".mat-mdc-tooltip-trigger > .mat-icon").click();
  cy.wait("@deleteCart").its("response.statusCode").should("eq", 200);
});

Cypress.Commands.add("addCart", () => {
  cy.visit("/");
  cy.intercept("POST", "**/api/shoppingcart/addToCart/11117/**").as(
    "addToCart"
  );
  cy.contains("Harry Potter and the Chamber").should("be.visible");
  cy.contains("button", "Add to Cart").should("be.visible").click();
  cy.wait("@addToCart").its("response.statusCode").should("eq", 200);
});
