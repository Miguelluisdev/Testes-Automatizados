describe("Cenário de Sucesso: Autenticação de Usuário", () => {
  beforeEach(() => {
    cy.visit("https://demo-saas.bugbug.io/sign-in");
    cy.url().should("include", "/sign-in");
  });

  it("CT01 - Login com as credenciais válidas (Happy Path)", () => {
    cy.get('input[name="email"]').type(Cypress.env("email"));
    cy.get('input[name="password"]').type(Cypress.env("password"), {log: false});
    cy.get(".mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d").click();

    cy.get('[data-testid="user-settings"]').should("be.visible");
  });
});
