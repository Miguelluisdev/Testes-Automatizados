import { nome, cpf, email, whatsapp } from "../support/selectors/cadastro";
import { faker } from "@faker-js/faker";

describe("Cenario 01: Cadastre-se para fazer entregas", () => {
  beforeEach(() => {
    cy.visit("https://buger-eats-qa.vercel.app/");
    cy.contains("a", "Cadastre-se para fazer entregas")
      .should("be.visible")
      .click();
    cy.url().should("include", "/deliver");
  });

  it("Cadastre-se para fazer entregas", () => {
    const usuario = {
      nomeFake: faker.person.fullName(),
      cpfFake: "50837391865",
      emailFake: faker.internet.email(),
      whatsappFake: faker.phone.number("9754031002"),
    };

    cy.get(nome).type(usuario.nomeFake).should("have.value", usuario.nomeFake);
    cy.get(cpf).type(usuario.cpfFake).should("have.value", usuario.cpfFake);
    cy.get(email)
      .type(usuario.emailFake)
      .should("have.value", usuario.emailFake);
    cy.get(whatsapp)
      .type(usuario.whatsappFake)
      .should("have.value", usuario.whatsappFake);
  });

  it("Validar campos obrigatórios", () => {
    cy.get(nome).should("be.visible").and("have.value", "");
    cy.get(cpf).should("be.visible").and("have.value", "");
    cy.get(email).should("be.visible").and("have.value", "");
    cy.get(whatsapp).should("be.visible").and("have.value", "");
    cy.get(".button-success").should('be.visible').click();
  });
});
