describe('Verificando se o site está no ar', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/book/').as('getHomePage');
    cy.intercept('GET', '/api/book/GetCategoriesList').as('getCategoriesList');
  })
  it('site no ar', () => {
    cy.visit('https://bookcart.azurewebsites.net/')
    cy.wait('@getHomePage').its('response.statusCode').should('eq', 200);
    cy.wait('@getCategoriesList').its('response.statusCode').should('eq', 200);
  })
})