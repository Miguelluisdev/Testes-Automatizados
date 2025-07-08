import OrganizationPage from "../support/pageObjects/CT_RF03-Page";
import { faker } from "@faker-js/faker";

describe("Cenário 03: Criação de uma organização após o cadastro", () => {
  beforeEach(() => {
    cy.login();
  });

  const nomeOrg = faker.company.name();

  it("Caso de Teste 01: Criar organização com nome válido (Happy Path)", () => {
    cy.get(
      '.mantine-visible-from-md > [data-testid="organization-picker"]'
    ).click();
    cy.contains("Create organization").click();
    OrganizationPage.dashboardVisible();
    OrganizationPage.button();

    OrganizationPage.fillName(nomeOrg);
    OrganizationPage.createButton();
  });

  // it("Caso de Teste 02: Tentar criar organização sem nome (Teste Negativo)", () => {
  //   cy.get(
  //     '.mantine-visible-from-md > [data-testid="organization-picker"]'
  //   ).click();
  //   cy.contains("Create organization").click();

  //   OrganizationPage.createButton();
  //   OrganizationPage.errorMessage();
  // });

  it("Caso de Teste 03: Criação de organização com configuração extra marcada (Caminho Alternativo)", () => {
    cy.get(
      '.mantine-visible-from-md > [data-testid="organization-picker"]'
    ).click();
    cy.contains("Create organization").click();
    OrganizationPage.fillName(nomeOrg);
    OrganizationPage.checkInput();
    OrganizationPage.createButton();
  });

  // teste abaixo é instavel
  // it("Caso de teste 04: Criando organização com nome já existente", () => {
  //   cy.visit('https://demo-saas.bugbug.io/teste/tickets')
  //   cy.get(
  //     '.mantine-visible-from-md > [data-testid="organization-picker"]'
  //   ).click();
  //   cy.contains("Create organization").click();
  //   OrganizationPage.fillName("Teste");
  //   OrganizationPage.checkInput();
  //   OrganizationPage.createButton();

  //   cy.contains("Already taken").should("have.text", "Already taken");
  // });
});
