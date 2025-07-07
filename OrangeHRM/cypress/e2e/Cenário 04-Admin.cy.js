describe("Cenário 04: Cadastro de novo usuário", () => {
  beforeEach(() => {
    cy.login();

    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );

    cy.contains("Add").click();
    cy.url().should("include", "/admin/saveSystemUser");
  });

  it("CT01 - Tentativa de cadastro com todos os campos vazios", () => {
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-input-group > .oxd-text")
      .should("contain", "Required")
      .and("have.length.at.least", 5);
  });

  it("CT02 - Tentativa com senhas que não coincidem", () => {
    cy.get(".oxd-select-text-input").first().click();
    cy.contains(".oxd-select-dropdown > *", "Admin").click();

    cy.get(".oxd-autocomplete-text-input > input").type("Rohit Sharma");
    cy.get('input[autocomplete="off"]').eq(1).type("usuario_teste");

    cy.get(".oxd-select-text-input").last().click();
    cy.contains(".oxd-select-dropdown > *", "Enabled").click();

    cy.get('input[type="password"]').eq(0).type("SenhaForte123!");
    cy.get('input[type="password"]').eq(1).type("SenhaErrada123!");

    cy.get('button[type="submit"]').click();

    cy.contains("Passwords do not match").should("be.visible");
  });
});
