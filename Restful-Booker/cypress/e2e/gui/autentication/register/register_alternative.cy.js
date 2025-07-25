describe("Login - Visualização de senha", () => {
  beforeEach(() => {
    cy.visit("https://bookcart.azurewebsites.net/login");
  });

  it("deve alternar entre ocultar e mostrar a senha ao clicar no ícone de olho", () => {
   cy.toggleIcon();
  });
});
