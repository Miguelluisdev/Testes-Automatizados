describe("Cenário 01: Login na plataforma", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });

  it("Tentativa de login com senha incorreta", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin");
    cy.get(".orangehrm-login-button").click();
    cy.get(".oxd-alert--error").should("be.visible", ".oxd-alert--error");
  });

  it("Tentativa de login com campo username errado", () => {
    cy.get('input[name="username"]').type("Admi");
    cy.get('input[name="password"]').type("admin123");
    cy.get(".orangehrm-login-button").click();
    cy.get(".oxd-alert--error").should("be.visible", ".oxd-alert--error");
  });

  it("Tentativa de login com campos em branco", () => {
    cy.get(".orangehrm-login-button").click();
    cy.get(".oxd-input-field-error-message")
      .should("be.visible")
      .and("contain", "Required");
  });
});