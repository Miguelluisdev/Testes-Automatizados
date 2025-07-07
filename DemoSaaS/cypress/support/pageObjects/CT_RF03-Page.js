class OrganizationPage {
  button() {
    cy.contains("Create new organization").click();
  }

  fillName(name) {
    cy.get('input[name="name"]').type(name);
  }

  dashboardVisible() {
    cy.get(".m_e615b15f").should("be.visible");
  }

  createButton() {
    cy.get(".m_811560b9").click();
  }

  errorMessage() {
    cy.contains("String must contain at least 3 character(s)").should(
      "have.text",
      "String must contain at least 3 character(s)"
    );
  }

  checkInput() {
    cy.get('input[name="importExampleTickets"]')
      .should("exist")
      .check({ force: true })
      .should("be.checked");
  }
}

export default new OrganizationPage();
