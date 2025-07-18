describe("Cenário de Sucesso: Cadastro de novo usuário", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
    cy.contains("Add").click();
    cy.url().should("include", "/admin/saveSystemUser");
  });

  it("CT03 - Cadastro com dados válidos", () => {
    cy.get(".oxd-select-text-input").first().click();
    cy.contains(".oxd-select-dropdown > *", "Admin").click();

    cy.get(".oxd-autocomplete-text-input > input").type("Rohit Sharma");
    cy.get('input[autocomplete="off"]').eq(1).type("usuario_valido_01");

    cy.get(".oxd-select-text-input").last().click();
    cy.contains(".oxd-select-dropdown > *", "Enabled").click();

    cy.get('input[type="password"]').eq(0).type("SenhaForte123!");
    cy.get('input[type="password"]').eq(1).type("SenhaForte123!");

    cy.get('button[type="submit"]').click();

  });
});
