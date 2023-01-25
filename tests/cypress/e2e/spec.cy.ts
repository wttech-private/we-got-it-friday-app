describe('Friday App', () => {
  it('displays an info that today is Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: true
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Today is Friday! :D')
      .percySnapshot();
  })

  it('displays an info that today is not Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: false
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Today is not Friday :(');
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
      .should('have.text', 'There are 1000 minutes to Friday.');
  })
})

describe('Friday App API', () => {
  it('returns 200 on isFriday', () => {
    cy.request('GET', 'https://08g2mwpml0.execute-api.eu-central-1.amazonaws.com/isFriday/1673612249920').then((response) => {
      expect(response.status).eq(200);
    })
  })

  it('returns 200 on minutesToFriday', () => {
    cy.request('GET', 'https://08g2mwpml0.execute-api.eu-central-1.amazonaws.com/minutesToFriday/1673612249920').then((response) => {
      expect(response.status).eq(200);
    })
  })
})


