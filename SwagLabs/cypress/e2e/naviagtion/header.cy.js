describe("Cenario 05: navegação do header menu", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });
  it("Navegando nos links do header", () => {
    cy.get(".bm-burger-button > button").click();
    cy.get("#about_sidebar_link");

    cy.get("#about_sidebar_link")
      .should("be.visible")
      .invoke("removeAttr", "target");

    cy.get("#logout_sidebar_link").click();

    cy.get("#login-button").should("be.visible");
    cy.url().should("include", "https://www.saucedemo.com/v1/");
  });
});
