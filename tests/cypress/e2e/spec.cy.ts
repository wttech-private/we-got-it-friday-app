describe('Friday App', () => {
  it('displays an info that today is Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: true
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Dzisiaj piątek! :D')
      .percySnapshot('Page load screen');
  })

  it('displays an info that today is not Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: false
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Dzisiaj nie jest piątek :(');
  })

  it('displays an info how long we need to wait for Friday', () => {
    cy.intercept('GET', '/minutesToFriday/*', {
      statusCode: 200,
      body: 1000
    })
      .visit('/')
      .get('#button')
      .click()
      .get('#minutes')
      .should('have.text', 'Zostało jeszcze 1000 minut do piątku.')
      .percySnapshot('Page load screen');
  })
})

describe('Friday App API', () => {
  it('returns 200 on isFriday', () => {
    cy.request('GET', 'https://j2dvvfkpij.execute-api.eu-central-1.amazonaws.com/isFriday/1673612249920').then((response) => {
      expect(response.status).eq(200);
    })
  })

  it('returns 200 on minutesToFriday', () => {
    cy.request('GET', 'https://j2dvvfkpij.execute-api.eu-central-1.amazonaws.com/minutesToFriday/1673612249920').then((response) => {
      expect(response.status).eq(200);
    })
  })
})



