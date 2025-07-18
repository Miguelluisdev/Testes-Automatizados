describe("Cenário de Sucesso: Gestão de funcionários via módulo PIM", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    cy.contains("PIM").should("be.visible").click();
  });

  it("Adicionar novo funcionário com dados válidos", () => {
    cy.contains("Add Employee").should("be.visible").click();

    cy.get('input[name="firstName"]').type("Miguel");
    cy.get('input[name="middleName"]').type("Luis");
    cy.get('input[name="lastName"]').type("Ferreira");
    cy.get(".orangehrm-left-space").should("be.visible").click("");

    cy.get("#oxd-toaster_1").should("be.visible");
    cy.get(".oxd-text--h6").should("be.visible");
  });

  it("Pesquisar funcionário já cadastrado", () => {
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input"
    ).type("Miguel Luis Ferreira");

    cy.get('button[type="submit"]').should("be.visible").click();

    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div"
    )
      .should("be.visible")
      .and("contain", "Miguel Luis");
  });
});
