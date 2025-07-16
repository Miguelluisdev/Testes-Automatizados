describe("Cenario 01: Registro de usuário com sucesso", () => {
  beforeEach(() => {
    cy.visit("https://bookcart.azurewebsites.net/register");
    cy.contains('User Registration').should('be.visible');
  });
  
  it("O usuario deve ser capaz de se registrar com sucesso", () => {
    cy.get("#mat-input-0").should("be.visible").type("Miguel");
    cy.get("#mat-input-1").should("be.visible").type("Luis");
    cy.get("#mat-input-2").should("be.visible").type("ML");
    cy.get('#mat-input-3').should("be.visible").type("SenhaForte1");
    cy.get('#mat-input-4').should("be.visible").type("SenhaForte1");

    cy.contains('Male').should("be.visible").click();

   cy.get('.mat-mdc-card-actions > .mdc-button').click();
  });

});
