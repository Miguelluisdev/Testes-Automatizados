
function swagLabsLogin(user, password) {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type(user);
  cy.get('[data-test="password"]').type(password, { log: false });
  cy.get('[data-test="login-button"]').click();
  cy.get(".inventory_list").should("be.visible");
}

function validateSwagLabsLogin() {
  cy.visit("https://www.saucedemo.com/v1/inventory.html");
  cy.get(".inventory_list").should("be.visible");
}

Cypress.Commands.add(
  "login",
  (
    user = "standard_user",
    password = "secret_sauce",
    { cacheSession = true } = {}
  ) => {
    const options = {
      cacheAcrossSpecs: true,
      validate: () => validateSwagLabsLogin(),
    };

    if (cacheSession) {
      cy.session(user, () => swagLabsLogin(user, password), options);
    } else {
      swagLabsLogin(user, password);
    }
  }
);



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
