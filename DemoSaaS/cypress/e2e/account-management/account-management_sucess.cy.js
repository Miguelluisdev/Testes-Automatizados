import { faker } from "@faker-js/faker";

describe("Cenário 04: Gerenciar informações da conta do usuário - Sucesso", () => {
  beforeEach(() => {
    cy.login();
    cy.get('[data-testid="user-settings"]').click();
    cy.contains("Manage account").click({ force: true });
    cy.url().should("include", "/manage-account");
  });

  it("CT01: Atualizar nome e sobrenome com dados válidos", () => {
    const novoNome = faker.person.firstName();
    const novoSobrenome = faker.person.lastName();

    cy.get('input[name="firstName"]').clear().type(novoNome);
    cy.get('input[name="lastName"]').clear().type(novoSobrenome);
    cy.contains("Save").click();

    cy.get('[data-content=""] > div').should("be.visible");
  });

  it("CT02: Alterar senha com dados válidos", () => {
    cy.contains("Security").should("be.visible").click();
    cy.get('input[name="currentPassword"]').type("XyzioSCtuq");
    cy.get('input[name="newPassword"]').type("XyzioSCtuq");
    cy.contains("Change password").click();

    cy.get('[data-content=""] > div').should("be.visible");
  });
});
