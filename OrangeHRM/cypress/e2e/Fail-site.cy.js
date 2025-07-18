it("Deve carregar a tela de login com sucesso", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  cy.get('input[name="username"]').should("be.visible");
  cy.get('input[name="password"]').should("be.visible");
});
