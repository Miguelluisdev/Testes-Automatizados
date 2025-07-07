import SignUpPage from "../support/pageObjects/CT_RF02-Page";
import { faker } from "@faker-js/faker";

describe("Cenário 02: Registro de novo usuário na plataforma", () => {
  beforeEach(() => {
    cy.visit("https://demo-saas.bugbug.io/");
    cy.contains("Go to example sign up").click();
    cy.url().should("include", "/sign-up");
  });

  const dataUser = {
    firstname: "Miguel",
    lastname: "Luis",
    email: "miguelluisatf@gmail.com",
    password: "XyzioSCtuq",
    randomEmail: faker.internet.email(),
  };

  it("Caso de Teste 01: Cadastro com todos os dados válidos (Happy Path)", () => {
    SignUpPage.fillFirstname(dataUser.firstname);
    SignUpPage.fillLastname(dataUser.lastname);
    SignUpPage.fillEmail(dataUser.randomEmail);
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();

    cy.contains("Check your email").should("be.visible");
  });

  it("Caso de Teste 02: Cadastro com usuário existente", () => {
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
    SignUpPage.fillLastname(dataUser.lastname);
    SignUpPage.fillEmail(dataUser.email);
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();
    cy.contains("String must contain at least 1 character(s)").should(
      "be.visible"
    );
  });

  it("Caso de Teste 04: Cadastro com lastname errado", () => {
    SignUpPage.fillFirstname(dataUser.firstname);
    SignUpPage.fillEmail(dataUser.email);
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();
    cy.contains("String must contain at least 1 character(s)").should(
      "be.visible"
    );
  });

  it("Caso de Teste 05:Cadastro com email errado", () => {
    SignUpPage.fillFirstname(dataUser.firstname);
    SignUpPage.fillLastname(dataUser.lastname);
    SignUpPage.fillEmail("migeualemail.c");
    SignUpPage.fillPassword(dataUser.password);

    SignUpPage.submit();
    cy.contains("Invalid email").should("be.visible");
  });

  it("Caso de Teste 05:Cadastro com senha errada", () => {
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
    SignUpPage.submit();
    SignUpPage.assertErrorMessage();
  });
});
