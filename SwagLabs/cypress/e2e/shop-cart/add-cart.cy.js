describe("Cenario 02: adicionar os produtos ao carrinho", () => {
  beforeEach(() => {
    cy.login();
  });

  it("adicionar produto ao carrinho", () => {
    cy.addCart();
  });

  it("adicionar mais de um produto ao carrinho", () => {
    cy.get(".inventory_item .btn_primary").each(($btn, index) => {
      if (index < 3) {
        cy.wrap($btn).click();
      }
    });

    cy.get(".btn_secondary").should("have.length.at.least", 3);

    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "3");

    cy.get("a.shopping_cart_link").click();

    cy.get(".cart_item .inventory_item_name").each(($item, index) => {
      if (index < 3) {
        cy.wrap($item).should("be.visible");
      }
    });
  });
});
