import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
  nome,
  cpf,
  email,
  whatsapp,
  cep,
  adress_complement,
  adress_number,
} from "../../support/selectors/cadastro";
import { mensagensObrigatorias } from "../../support/selectors/required-messages";
import { faker } from "@faker-js/faker";

Given("que o usuário acessa o site de cadastro", () => {
  cy.entrarNoSite();
});

When("o usuário preenche todos os campos obrigatórios com dados válidos", () => {
  const usuario = {
    nomeFake: faker.person.fullName(),
    cpfFake: "50837391865",
    emailFake: faker.internet.email(),
    whatsappFake: faker.phone.number("9754031002"),
  };

  cy.get(nome).type(usuario.nomeFake).should("have.value", usuario.nomeFake);
  cy.get(cpf).type(usuario.cpfFake).should("have.value", usuario.cpfFake);
  cy.get(email).type(usuario.emailFake).should("have.value", usuario.emailFake);
  cy.get(whatsapp).type(usuario.whatsappFake).should("have.value", usuario.whatsappFake);
  cy.get(cep).type("23090-720");
  cy.get(adress_number).type("00");
  cy.get(adress_complement).type("Casa 1");
  cy.get(":nth-child(3) > :nth-child(2) > :nth-child(2) > input").click();
});

When("seleciona o método de entrega como {string}", (metodo) => {
  cy.contains(metodo).click();
});

When("faz o upload da CNH", () => {
  cy.UploadFile();
});

When("envia o formulário", () => {
  cy.enviarFormulario();
});

Then("o cadastro deve ser enviado com sucesso", () => {
  cy.contains("Recebemos os seus dados").should("be.visible");
});

When("o usuário tenta enviar o formulário sem preencher os campos", () => {
  cy.get(".button-success").click();
});

Then("todas as mensagens obrigatórias devem ser exibidas", () => {
  Object.values(mensagensObrigatorias).forEach((mensagem) => {
    cy.contains(mensagem).should("be.visible");
  });
});
