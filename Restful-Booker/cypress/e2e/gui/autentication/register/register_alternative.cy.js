describe("Login - Visualização de senha", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("deve alternar entre ocultar e mostrar a senha ao clicar no ícone de olho", () => {
    cy.get("#mat-input-3")
      .should("be.visible")
      .should("have.attr", "type", "password")
      .type("SenhaForte1");

    cy.get('mat-icon[data-mat-icon-type="font"]')
      .contains("visibility_off")
      .click();
    cy.get("#mat-input-3").should("have.attr", "type", "text");

    cy.get("#mat-input-4")
      .should("be.visible")
      .should("have.attr", "type", "password")
      .type("SenhaForte1");

    cy.get("mat-icon.material-icons").contains("visibility_off").click();
    cy.get("#mat-input-4").should("have.attr", "type", "text");
  });
});
