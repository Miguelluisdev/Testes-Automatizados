describe("Cenario 03: removendo produto do carrinho", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });

  it("Removendo um produto do carrinho", () => {
    cy.get(":nth-child(1) > .pricebar > .btn_primary").click();

    cy.get(".btn_secondary").should("be.visible");
    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");

    cy.get('a[href="./cart.html"]').should("be.visible").click();

    cy.contains("Sauce Labs Backpack").should(
      "have.text",
      "Sauce Labs Backpack"
    );

    cy.get(".item_pricebar > .btn_secondary").click();
    cy.contains("Sauce Labs Backpack").should("not.exist");
  });

  it("Removendo todos os produtos do carrinho", () => {
    cy.get(".inventory_item .btn_primary").each(($btn, index) => {
      if (index < 3) {
        cy.wrap($btn).click();
      }
    });

    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "3");

    cy.get('a[href="./cart.html"]').should("be.visible").click();

    cy.get(".cart_item").should("have.length", 3);

    cy.get(".cart_item .btn_secondary").each(($btn) => {
      cy.wrap($btn).click();
    });

    cy.get(".cart_item").should("have.length", 0);
  });
});
