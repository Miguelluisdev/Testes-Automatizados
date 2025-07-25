describe("Category Success Test", () => {
  beforeEach(() => {
    cy.login();
    cy.url().should("include", "/");
    cy.intercept("GET", "/api/book/GetCategoriesList").as("getCategory");
  });
  
  it("should display the category page correctly", () => {
    cy.wait("@getCategory");
    cy.contains("span", "Biography").should("be.visible").click();
    cy.url().should("include", "/filter?category=biography");
  });
});
