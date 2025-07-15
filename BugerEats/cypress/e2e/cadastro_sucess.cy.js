import {
  nome,
  cpf,
  email,
  whatsapp,
  cep,
  adress_complement,
  adress_number,
} from "../support/selectors/cadastro";
import { mensagensObrigatorias } from "../support/selectors/required-messages";
import { faker } from "@faker-js/faker";

describe("Cenario 01: Cadastre-se para fazer entregas", () => {
  beforeEach(() => {
    cy.entrarNoSite();
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

    cy.get(cep).should("be.visible").type("23090-720");
    cy.get(adress_number).should("be.visible").type("00");
    cy.get(adress_complement).should("be.visible").type("Casa 1");
    cy.get(":nth-child(3) > :nth-child(2) > :nth-child(2) > input").click();

    cy.contains("Moto").should("be.visible").click();

    cy.UploadFile();
    cy.enviarFormulario();
  });

  it("Validar campos obrigatórios", () => {
    cy.get(".button-success").should("be.visible").click();
    Object.values(mensagensObrigatorias).forEach((mensagem) => {
      cy.contains(mensagem).should("be.visible");
    });
  });
});
