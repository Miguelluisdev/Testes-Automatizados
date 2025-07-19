// teste instavel
import { faker } from "@faker-js/faker";

describe("Cenário 05: Visualização de Tickets", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Caso de Teste 01: Visualização de tickets com dados completos (Happy Path)", () => {
    cy.contains("New").should("be.visible").click({ force: true });

    const titulo = faker.lorem.words(3);
    const descricao = faker.lorem.paragraph();

    cy.get('input[name="authorName"]').type('a');
    cy.get('input[name="title"]').type(titulo);
   
  });
});
