import { faker } from "@faker-js/faker";

describe("Cadastro - Caminhos Felizes", () => {
  beforeEach(() => {
    cy.visit("https://demo-saas.bugbug.io//sign-up");
    cy.url().should("include", "/sign-up");
  });

  const dataUser = {
    firstname: "Miguel",
    lastname: "Luis",
    randomEmail: faker.internet.email(),
  };

  it("Cadastro com todos os dados válidos (Happy Path)", () => {
    cy.get('input[name="firstName"]').type(dataUser.firstname);
    cy.get('input[name="lastName"]').type(dataUser.lastname);
    cy.get('input[name="email"]').type(dataUser.randomEmail);
    cy.get('input[name="password"]').type(Cypress.env("password"));
    cy.get('.mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d').click();

    cy.contains("Check your email").should("be.visible");
  });
});
