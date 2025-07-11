Cypress.Commands.add("login", () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.get('[data-test="username"]').type(Cypress.env('username'));
  cy.get('[data-test="password"]').type(Cypress.env('password'));
  cy.get("#login-button").click();
  cy.get(".product_label").should("be.visible");
  cy.log("login com dados validos (happy path)");
});

Cypress.Commands.add("addCart", () => {
  cy.get(":nth-child(1) > .pricebar > .btn_primary").click();

  cy.get(".btn_secondary").should("be.visible");
  cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");

  cy.get('a[href="./cart.html"]').should("be.visible").click();

  cy.contains("Sauce Labs Backpack").should("have.text", "Sauce Labs Backpack");
});

Cypress.Commands.add("addManyProducts", () => {
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
