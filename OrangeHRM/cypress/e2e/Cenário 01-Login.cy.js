describe("Cenário 01: Login na plataforma", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

 after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log("🧹 Cookies e Local Storage limpos após todos os testes.");
  });


  it("Login com as credenciais válidas.", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get(".orangehrm-login-button").click();
    cy.contains("Dashboard").should("be.visible");
  });

  it("Tentativa de login com senha incorreta", () => {
    const Username = "Admin";
    const Password = "admin";

    cy.get('input[name="username"]').type(Username);

    cy.get('input[name="password"]').type(Password);

    cy.get(".orangehrm-login-button").click();

    cy.get(".oxd-alert--error").should("be.visible", ".oxd-alert--error");
  });

  it("Tentativa de login com campo username errado", () => {
    const Username = "Admi";
    const Password = "admin123";

    cy.get('input[name="username"]').type(Username);

    cy.get('input[name="password"]').type(Password);

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
