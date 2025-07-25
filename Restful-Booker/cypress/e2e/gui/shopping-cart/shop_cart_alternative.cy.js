describe("shopping cart alternative test", () => {
  beforeEach(() => {
    cy.login();
    cy.intercept("POST", "**/api/shoppingcart/addToCart/11117/2").as("addCart");
  });

  it("adicionando mais do mesmo item ao carrinho", () => {
    cy.contains("Harry Potter and the Chamber").should("be.visible");
    cy.contains("button", "Add to Cart").should("be.visible").click();

    cy.visit("/shopping-cart");
    cy.contains("button", "add_circle").should("be.visible").click();
    cy.wait("@addCart").its("response.statusCode").should("eq", 200);

    cy.clearCart();
  });
});
