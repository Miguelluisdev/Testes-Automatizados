Cypress.Commands.add("login", () => {
  cy.visit("https://demo-saas.bugbug.io/sign-in");
  cy.get('input[name="email"]').type(Cypress.env("email"));
  cy.get('input[name="password"]').type(Cypress.env("password"), {
    log: false,
  });
  cy.get(".mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d").click();

  cy.get('[data-testid="user-settings"]').should("be.visible");
});

Cypress.Commands.add("fillAndSubmitSignUp", (userData) => {
  if (userData.firstName) {
    cy.get('input[name="firstName"]').type(userData.firstName);
  }
  if (userData.lastName) {
    cy.get('input[name="lastName"]').type(userData.lastName);
  }
  if (userData.email) {
    cy.get('input[name="email"]').type(userData.email);
  }
  if (userData.password) {
    cy.get('input[name="password"]').type(userData.password);
  }

  cy.get(".mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d").click();
});
