Cypress.Commands.add("UploadFile", () => {
  cy.fixture("image-discord.jpg").as("imageFile");
  cy.get('input[type="file"]').selectFile("@imageFile", { force: true });
});

Cypress.Commands.add("enviarFormulario", () => {
  cy.get(".button-success").should("be.visible").click();
  cy.get(".swal2-popup").should("be.visible");
  cy.get(".swal2-confirm").click();
});

Cypress.Commands.add("entrarNoSite", () => {
  cy.visit("https://buger-eats-qa.vercel.app/");
  cy.contains("a", "Cadastre-se para fazer entregas")
    .should("be.visible")
    .click();
  cy.url().should("include", "/deliver");
});
