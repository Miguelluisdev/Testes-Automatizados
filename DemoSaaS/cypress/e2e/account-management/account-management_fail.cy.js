describe("Cenário 04: Gerenciar informações da conta do usuário - Falha", () => {
  beforeEach(() => {
    cy.login();
    cy.get('[data-testid="user-settings"]').click();
    cy.contains("Manage account").click({ force: true });
    cy.url().should("include", "/manage-account");
  });

  it("CT03: Alterar senha com senha atual incorreta", () => {
    cy.contains("Security").should("be.visible").click();
    cy.get('input[name="currentPassword"]').type("Xyzi"); 
    cy.get('input[name="newPassword"]').type("XyzioSCtuq");
    cy.contains("Change password").click();

    cy.contains("Invalid password").should("be.visible");
  });
});
