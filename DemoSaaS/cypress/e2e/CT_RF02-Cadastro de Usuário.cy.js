import SignUpPage from "../support/pageObjects/CT_RF02-Page";

describe("Cenário 02: Registro de novo usuário na plataforma", () => {
  beforeEach(() => {
    SignUpPage.visit();
  });

  const dataUser = {
    firstname: "Miguel",
    lastname: "Luis",
    email: "miguelluisatf@gmail.com",
    password: "XyzioSCtuq",
  };

  it("Caso de Teste 01: Cadastro com todos os dados válidos (Happy Path)", () => {
    cy.contains("Go to example sign up").click();

    SignUpPage.assertUrlVisible();
    SignUpPage.fillFirstname(dataUser.firstname);
    SignUpPage.fillLastname(dataUser.lastname);
    SignUpPage.fillEmail(dataUser.email);
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();
  });

  it("Caso de Teste 02: Cadastro com usuário existente", () => {
    cy.contains("Go to example sign up").click();

    SignUpPage.assertUrlVisible();
    SignUpPage.fillFirstname(dataUser.firstname);
    SignUpPage.fillLastname(dataUser.lastname);
    SignUpPage.fillEmail(dataUser.email);
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();

    cy.get("body").then(($body) => {
      if ($body.text().includes("Too many requests. Please try again later.")) {
        cy.contains("Too many requests. Please try again later.").should(
          "be.visible"
        );
      } else {
        cy.contains("User already exists").should("be.visible");
      }
    });
  });

  it("Caso de Teste 03: Cadastro com firstname errado", () => {
    cy.contains("Go to example sign up").click();

    SignUpPage.assertUrlVisible();
    SignUpPage.fillLastname(dataUser.lastname);
    SignUpPage.fillEmail(dataUser.email);
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();
    cy.contains("String must contain at least 1 character(s)").should(
      "be.visible"
    );
  });

  it("Caso de Teste 04: Cadastro com lastname errado", () => {
    cy.contains("Go to example sign up").click();

    SignUpPage.assertUrlVisible();
    SignUpPage.fillFirstname(dataUser.firstname);
    SignUpPage.fillEmail(dataUser.email);
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();
    cy.contains("String must contain at least 1 character(s)").should(
      "be.visible"
    );
  });

  it("Caso de Teste 05:Cadastro com email errado", () => {
    cy.contains("Go to example sign up").click();

    SignUpPage.assertUrlVisible();
    SignUpPage.fillFirstname(dataUser.firstname);
    SignUpPage.fillLastname(dataUser.lastname);
    SignUpPage.fillEmail("migeualemail.c");
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();
    cy.contains("Invalid email").should("be.visible");
  });

  it("Caso de Teste 05:Cadastro com senha errada", () => {
    cy.contains("Go to example sign up").click();

    SignUpPage.assertUrlVisible();
    SignUpPage.fillFirstname(dataUser.firstname);
    SignUpPage.fillLastname(dataUser.lastname);
    SignUpPage.fillEmail(dataUser.email);
    SignUpPage.fillPassword("tws");

    SignUpPage.submit();
    cy.contains("String must contain at least 8 character(s)").should(
      "be.visible"
    );
  });

  it("Caso de Teste 05:Cadastro com campos vazios", () => {
    cy.contains("Go to example sign up").click();

    SignUpPage.submit();
    SignUpPage.assertErrorMessage();
  });
});
