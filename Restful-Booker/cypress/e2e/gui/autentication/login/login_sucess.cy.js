describe('Login Success Test', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.intercept('POST', '/api/login').as('postLogin');
  })
  it('o usuario deve ser capaz preencher o formulario com os dados corretos e entrar no site' , () => {
    cy.get('#mat-input-0').should('be.visible').type(Cypress.env('username'))
    cy.get('#mat-input-1').should('be.visible').type(Cypress.env('password'))
    cy.get('.mat-mdc-card-actions > .mdc-button > .mdc-button__label').click()
    cy.wait('@postLogin')
  })
})