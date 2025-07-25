import { campos } from "../../../support/selectors/checkout-form-selectors";

describe("Checkout Success Test", () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('POST' , '**/api/CheckOut/11117').as('placeOrder');
    cy.intercept('GET' , '**/api/Order/11117').as('getOrder');
  });

  it("o checkout deve ser realizado com sucesso", () => {
    cy.addCart(); 
    cy.visit("/checkout");

    cy.contains("Harry Potter and the Chamber of Secrets").should("be.visible");

    campos.forEach(({ selector, valor }) => {
      cy.get(selector).should("be.visible").clear().type(valor);
    });

    cy.contains("button", "Place Order").click();
    cy.wait("@placeOrder")
    cy.wait("@getOrder")
  });
});
