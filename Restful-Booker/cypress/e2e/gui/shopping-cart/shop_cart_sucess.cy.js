describe("Shopping Cart Success Test", () => {
  beforeEach(() => {
    cy.login();
  });
  it("should display success message after adding items to cart", () => {
   cy.addCart();
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
