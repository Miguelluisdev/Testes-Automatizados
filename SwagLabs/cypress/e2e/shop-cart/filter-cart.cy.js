describe("Cenario: 04 ", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });

  it("Seleciona ordenação de produtos de Z a A", () => {
    cy.get(".product_sort_container").should("be.visible").select("za");
    cy.get(".inventory_item_name")
      .first()
      .should("have.text", "Test.allTheThings() T-Shirt (Red)");
  });

  it("Seleciona ordenação de produtos de low to high", () => {
    cy.get(".product_sort_container").should("be.visible").select("lohi");
    cy.get(".inventory_item_price").first().should("have.text", "$7.99");
  });

  it("Seleciona ordenação de produtos de high to low", () => {
    cy.get(".product_sort_container").should("be.visible").select("hilo");
    cy.get(".inventory_item_price").first().should("have.text", "$49.99");
  });
});
