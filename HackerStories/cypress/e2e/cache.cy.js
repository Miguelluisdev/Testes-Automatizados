import { faker } from '@faker-js/faker'

describe('Hacker News Search', () => {
  const term = 'cypress.io'

  beforeEach(() => {
    cy.intercept(
      '**/search?query=redux&page=0&hitsPerPage=100',
      { fixture: 'empty'}
    ).as('empty')
    cy.intercept(
      `**/search?query=${term}&page=0&hitsPerPage=100`,
      { fixture: 'stories'}
    ).as('stories')

    cy.visit('/')
    cy.wait('@empty')
  })

  it('correctly caches the results', () => {
    const randomWord = faker.word.sample() 

    let count = 0

    cy.intercept(`**/search?query=${randomWord}**`, req => {
      count += 1
      req.reply({ fixture: 'empty' })
    }).as('random')

    cy.search(randomWord).then(() => {
      expect(count, `network calls to fetch ${randomWord}`).to.equal(1)

      cy.wait('@random')

      cy.search(term)
      cy.wait('@stories')

      cy.search(randomWord).then(() => {
        expect(count, `network calls to fetch ${randomWord}`).to.equal(1)
      })
    })
  })
})
