class SignUpPage {

  fillFirstname(firstname) {
   cy.get('input[name="firstName"]').type(firstname);
  }

  fillLastname(lastname) {
  cy.get('input[name="lastName"]').type(lastname)
  }

   fillEmail(email){
    cy.get('input[name="email"]').type(email)
   }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('.mantine-Fieldset-root > .m_6d731127 > .m_77c9d27d').click();
  }

  assertErrorMessage() {
    cy.get(".mantine-TextInput-error").should("be.visible");
  }
}

export default new SignUpPage();
