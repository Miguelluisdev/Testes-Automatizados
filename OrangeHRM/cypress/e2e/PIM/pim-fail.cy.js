describe("Cenário de Falha: Validações no módulo PIM", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    cy.contains("PIM").should("be.visible").click();
  });

  it("Tentar adicionar funcionário sem preencher campos obrigatórios", () => {
    cy.contains("Add Employee").should("be.visible").click();

    cy.get(".orangehrm-left-space").should("be.visible").click("");
    cy.get(".oxd-input-field-error-message").should("be.visible");
  });
});
