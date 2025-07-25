import { campos } from "../../../../support/selectors/register-form-selectors";

describe("Cenario 01: Registro de usuário com sucesso", () => {
  beforeEach(() => {
    cy.visit("https://bookcart.azurewebsites.net/register");

    const usernameCampo = campos.find((c) => c.selector === "#mat-input-2");

    cy.intercept(
      "GET",
      new RegExp(`/api/user/validateUserName/${usernameCampo.valor}`)
    ).as("getUserNameValidation");
  });

  it("O usuario deve ser capaz de se registrar com sucesso", () => {
    campos.forEach((campo) => {
      cy.get(campo.selector).should("be.visible").type(campo.valor);
    });

    cy.contains("Male").should("be.visible").click();
    cy.contains("button", "Register").click();

    cy.wait("@getUserNameValidation")
      .its("response.statusCode")
      .should("eq", 200);
  });
});
