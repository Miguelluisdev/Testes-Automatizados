describe("Cenário de Falha: Autenticação de Usuário", () => {
  beforeEach(() => {
    cy.visit("https://demo-saas.bugbug.io/sign-in");
    cy.url().should("include", "/sign-in");
  });

  it("CT02 - Login com email inválido", () => {
    cy.get('input[name="email"]').type("miguelmail.c");
    cy.get('input[name="password"]').type("XyzioSCtuq", { log: false });
    cy.get(".mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d").click();

    cy.contains("Invalid email").should("be.visible");
  });

  it("CT03 - Login com senha inválida", () => {
    cy.get('input[name="email"]').type("miguelluisatf@gmail.com");
    cy.get('input[name="password"]').type("4g4", { log: false });
    cy.get(".mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d").click();

    cy.contains("Invalid email or password").should("be.visible");
  });
});
