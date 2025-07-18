// Função de login fora do Cypress.Commands
function orangeHRMLogin(user, password) {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  cy.get('input[name="username"]').type(user);
  cy.get('input[name="password"]').type(password, { log: false });
  cy.get(".orangehrm-login-button").click();

  cy.url().should(
    "include",
    "/web/index.php/dashboard/index"
  );
}

// Função de validação da sessão
function validateOrangeHRMLogin() {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  cy.get("h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
    .should("contain", "Dashboard"); // ou outro elemento confiável da dashboard
}

// Cypress Command com opção de cache de sessão
Cypress.Commands.add(
  "login",
  (
    user = Cypress.env("username"),
    password = Cypress.env("password"),
    { cacheSession = true } = {}
  ) => {
    const options = {
      cacheAcrossSpecs: true,
      validate: () => validateOrangeHRMLogin(),
    };

    if (cacheSession) {
      cy.session(user, () => orangeHRMLogin(user, password), options);
    } else {
      orangeHRMLogin(user, password);
    }
  }
);
