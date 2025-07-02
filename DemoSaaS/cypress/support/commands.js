Cypress.Commands.add("cadastrarUsuario", (user) => {
  cy.contains("Go to example sign up").click();

  cy.url().should("include", "/signup");

  cy.get('input[name="firstName"]').type(user.firstname);

  cy.get('input[name="lastName"]').type(user.lastname);

  cy.get('input[name="email"]').type(user.email);

  cy.get('input[name="password"]').type(user.password);

  cy.get('.mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d').click();
});
