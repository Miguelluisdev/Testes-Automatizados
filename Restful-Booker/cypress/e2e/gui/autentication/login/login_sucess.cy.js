describe('Login Success Test', () => {
  beforeEach(() => {
    cy.visit('https://bookcart.azurewebsites.net/login')
    cy.intercept('POST', '/api/login').as('postLogin');
  })
  it('o usuario deve ser capaz preencher o formulario com os dados corretos e entrar no site' , () => {
    cy.get('#mat-input-0').should('be.visible').type('ML')
    cy.get('#mat-input-1').should('be.visible').type('SenhaForte1')
    cy.get('.mat-mdc-card-actions > .mdc-button > .mdc-button__label').click()
    cy.wait('@postLogin')
  })
})