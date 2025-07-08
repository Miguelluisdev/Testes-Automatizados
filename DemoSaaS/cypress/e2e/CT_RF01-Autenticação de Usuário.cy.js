import LoginPage from "../support/pageObjects/CT_RF01-Page";

describe("Cenário 01: Autenticação de Usuário.", () => {
  beforeEach(() => {
    cy.visit("https://demo-saas.bugbug.io/sign-in");
    cy.url().should("include", "/sign-in");
  });

  it("Caso de Teste 01: Login com as credenciais válidas (Happy Path)", () => {
    LoginPage.fillEmail("miguelluisatf@gmail.com");
    LoginPage.fillPassword("XyzioSCtuq");
    LoginPage.submit();

    cy.get('[data-testid="user-settings"] > p').should('be.visible');
  });

  it("Caso de Teste 02: Login com credenciais de email inválidas (Teste Negativo)", () => {
    LoginPage.fillEmail("miguelmail.c");
    LoginPage.fillPassword("XyzioSCtuq");
    LoginPage.submit();

    cy.contains("Invalid email").should("be.visible");
  });

  it("Caso de Teste 03: Login com credenciais de senha inválidas (Teste Negativo)", () => {
    LoginPage.fillEmail("miguelluisatf@gmail.com");
    LoginPage.fillPassword("4g4");
    LoginPage.submit();

    cy.contains("Invalid email or password").should("be.visible");
  });
});
