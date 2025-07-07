import LoginPage from "../support/pageObjects/CT_RF01-Page";

describe("Cenário 01: Autenticação de Usuário.", () => {
  beforeEach(() => {
    cy.visit("https://demo-saas.bugbug.io/sign-in");
    cy.url().should("include", "/sign-in");
  });

  const loginUser = {
    email: "miguelluisatf@gmail.com",
    password: "XyzioSCtuq",
  };

it("Caso de Teste 01: Criar organização com nome válido (Happy Path)", () => {
  cy.get(
    '.mantine-visible-from-md > [data-testid="organization-picker"]'
  ).click();

  cy.contains("Create organization").should("be.visible").click();

  cy.url().should("include", "/create-organization"); 

  OrganizationPage.button();
  OrganizationPage.fillName(nomeOrg);
  OrganizationPage.createButton();
});


  it("Caso de Teste 02: Login com credenciais de email inválidas (Teste Negativo)", () => {
    LoginPage.fillEmail("miguelmail.c");
    LoginPage.fillPassword(loginUser.password);
    LoginPage.submit();

    cy.contains("Invalid email").should("be.visible");
  });

  it("Caso de Teste 03: Login com credenciais de senha inválidas (Teste Negativo)", () => {
    LoginPage.fillEmail(loginUser.email);
    LoginPage.fillPassword("4g4");
    LoginPage.submit();

    cy.contains("Invalid email or password").should("be.visible");
  });
});
