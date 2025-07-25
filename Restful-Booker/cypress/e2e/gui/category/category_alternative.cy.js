describe("Category Alternative Test", () => {
  beforeEach(() => {
    cy.login();
  });
  
  it("Price Filter should be visible and functional", () => {
    cy.contains("Price Filter").should("be.visible");
    cy.get(".mdc-slider").should("be.visible");
    cy.get(".mdc-slider").click("right"); 
  });
});
