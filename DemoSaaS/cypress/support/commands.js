Cypress.Commands.add("login", () => {
  cy.visit("https://demo-saas.bugbug.io/sign-in");

  cy.url().should("include", "/sign-in");

  cy.get('input[name="email"]').type('miguelluisatf@gmail.com');

  cy.get('input[name="password"]').type('XyzioSCtuq');

  cy.get('.mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d').click();
});
