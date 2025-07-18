describe("Cenario 01: Autenticate", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  it("login com dados validos (happy path)", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get(".inventory_list").should("be.visible");
  });
  it("Login com username incorreto (teste negativo)", () => {
    cy.get('[data-test="username"]').type("standa");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("login com password incorreto (teste negativo)", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("login com preenchimento parcial (caminho alternativo)", () => {
    cy.get('[data-test="username"]').type("standard");
    cy.get('[data-test="password"]').type("secret");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});
