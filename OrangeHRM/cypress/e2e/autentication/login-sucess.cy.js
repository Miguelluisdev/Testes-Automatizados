describe("Cenário 01: Login na plataforma", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });

  it("Login com as credenciais válidas.", () => {
   cy.login();
  });
});