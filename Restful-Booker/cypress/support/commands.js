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
