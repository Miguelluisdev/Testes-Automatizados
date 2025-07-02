import LoginPage from "../support/pageObjects/CT_RF01-Page";

describe("Cenário 01: Autenticação de Usuário.", () => {
  const loginUser = {
    email: "miguelluisatf@gmail.com",
    password: "XyzioSCtuq",
  };

  it("Caso de Teste 01: Login com as credenciais válidas (Happy Path)", () => {
    LoginPage.visit();

    LoginPage.assertUrlVisible();
    LoginPage.fillEmail(loginUser.email);
    LoginPage.fillPassword(loginUser.password);
    LoginPage.submit();

    cy.get('[data-testid="user-settings"] > p').should(
      "have.text",
      "Miguel Luis"
    );
  });

  it("Caso de Teste 02: Login com credenciais de email inválidas (Teste Negativo)", () => {
    LoginPage.visit();

    LoginPage.assertUrlVisible();
    LoginPage.fillEmail("miguelmail.c");
    LoginPage.fillPassword(loginUser.password);
    LoginPage.submit();

    cy.contains("Invalid email").should("be.visible");
  });

  it("Caso de Teste 03: Login com credenciais de senha inválidas (Teste Negativo)", () => {
    LoginPage.visit();

    LoginPage.assertUrlVisible();
    LoginPage.fillEmail(loginUser.email);
    LoginPage.fillPassword("4g4");
    LoginPage.submit();

    cy.contains("Invalid email or password").should(
      "be.visible"
    );
  });
});
