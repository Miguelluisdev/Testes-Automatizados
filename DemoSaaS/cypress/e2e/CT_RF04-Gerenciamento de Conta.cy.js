import { faker } from "@faker-js/faker";

describe("Cenário 04: Gerenciar informações da conta do usuário", () => {
  beforeEach(() => {
    cy.login();

    cy.get('[data-testid="user-settings"]').click();

    cy.contains("Manage account").click({ force: true });

    cy.url().should("include", "/manage-account");
  });

  it("Caso de Teste 01: Atualizar nome e sobrenome com dados válidos (Happy Path)", () => {
    const novoNome = faker.person.firstName();
    const novoSobrenome = faker.person.lastName();

    cy.get('input[name="firstName"]').clear().type(novoNome);
    cy.get('input[name="lastName"]').clear().type(novoSobrenome);

    cy.contains("Save").click();

    cy.get('[data-content=""] > div').should("be.visible");
  });

  it("Caso de Teste 02: Tentar alterar a senha com senha atual com dados validos (Happy Path)", () => {
    cy.contains("Security").should("be.visible").click();
    cy.get('input[name="currentPassword"]').type("XyzioSCtuq");
    cy.get('input[name="newPassword"]').type("XyzioSCtuq");

    cy.contains("Change password").click();

    cy.get('[data-content=""] > div').should("be.visible");
  });

  it("Caso de Teste 03: Tentar alterar a senha com senha atual com dados incorretos (Teste negativo)", () => {
    cy.contains("Security").should("be.visible").click();
    cy.get('input[name="currentPassword"]').type("Xyzi");
    cy.get('input[name="newPassword"]').type("XyzioSCtuq");

    cy.contains("Change password").click();

    cy.contains("Invalid password").should("be.visible");
  });
  // it("Caso de Teste 03: Inserir nome com limite mínimo de caracteres (Valor Limite)", () => {
  //   cy.get('input[name="firstName"]').type("A");
  //   cy.get('input[name="lastName"]').type("B");

  //   cy.contains("Change password").click();

  //   cy.contains("Invalid password").should("be.visible");
  // });

  // it("Caso de Teste 04: Logout pelo gerenciamento de conta (Caminho Alternativo)", () => {
  //   cy.contains("Log out").should("be.visible").click({ force: true });

  //   cy.url().should("include", "/sign-in");
  //   cy.contains("Sign in").should("be.visible");
  // });
});
