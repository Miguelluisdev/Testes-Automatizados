describe("Cenario 06: Verificando o produto single ", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });
  it("Single product page", () => {
    cy.get("#item_4_title_link > .inventory_item_name").click();
    cy.url().should("include", "/v1/inventory-item.html?id=4");
    cy.contains(
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
    ).should(
      "have.text",
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
    );
  });
});
