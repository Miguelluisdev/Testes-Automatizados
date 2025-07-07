Cypress.Commands.add("login", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  cy.get('input[name="username"]').type("Admin");
  cy.get('input[name="password"]').type("admin123");
  cy.get(".orangehrm-login-button").click();
  cy.url().should(
    "include",
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
});
