describe('Friday App', () => {
  it('displays an info that today is not Friday', () => {
    cy.intercept('GET', '/isFriday/*', {
      statusCode: 200,
      body: false
    })
      .visit('/')
      .get('#isFriday')
      .should('have.text', 'Piątek? To nie dzisiaj :(')
      .percySnapshot();
  });
});
