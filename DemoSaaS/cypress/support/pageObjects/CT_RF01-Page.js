class LoginPage {
  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get(
      ".mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d > .m_80f1301b"
    ).click();
  }

  assertErrorMessage() {
    cy.contains("Invalid email").should("be.visible");
  }
}

export default new LoginPage();
