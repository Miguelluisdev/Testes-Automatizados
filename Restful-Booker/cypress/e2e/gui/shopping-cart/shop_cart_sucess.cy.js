describe("Shopping Cart Success Test", () => {
  beforeEach(() => {
    cy.login();
    cy.intercept("POST", "**/api/shoppingcart/addToCart/11117/**").as(
      "addToCart"
    );
  });
  it("should display success message after adding items to cart", () => {
    cy.contains("Harry Potter and the Chamber").should("be.visible");
    cy.contains("button", "Add to Cart").should("be.visible").click();
    cy.wait("@addToCart").its("response.statusCode").should("eq", 200);
  });
  it("verify cart updates", () => {
    cy.visit("/shopping-cart");
    cy.intercept("GET", "/api/shoppingcart/11117").as("getCart");
    cy.contains("a", "Harry Potter and the Chamber of Secrets").should(
      "be.visible"
    );
    cy.wait("@getCart").its("response.statusCode").should("eq", 200);
    cy.clearCart();
  });
});
