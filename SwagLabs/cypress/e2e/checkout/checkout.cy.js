describe("Cenario 07: Checkout de compra", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });
  it("realizando compra do produto com sucesso", () => {
    cy.addCart();
    cy.get(".btn_action").click();

    cy.get('[data-test="firstName"]').type("Miguel");
    cy.get('[data-test="lastName"]').type("Luis");
    cy.get('[data-test="postalCode"]').type("28999-999");

    cy.get(".btn_primary").click();
    cy.url().should("include", "/checkout-step-two.html");

    cy.get(".btn_action").click();
    cy.contains("THANK YOU FOR YOUR ORDER").should("be.visible");
  });
  it("realizando compra de varios produtos com sucesso", () => {
    cy.addManyProducts();
    cy.get(".btn_action").click();

    cy.get('[data-test="firstName"]').type("Miguel");
    cy.get('[data-test="lastName"]').type("Luis");
    cy.get('[data-test="postalCode"]').type("28999-999");

    cy.get(".btn_primary").click();
    cy.url().should("include", "/checkout-step-two.html");

    cy.get(".btn_action").click();
    cy.contains("THANK YOU FOR YOUR ORDER").should("be.visible");
  });
  it("realizando compra de produto com dados inavlidos", () => {
    cy.addCart();
    cy.get(".btn_action").click();

    cy.get(".btn_primary").click();

    cy.get('[data-test="error"]').should("be.visible");
  });
});
