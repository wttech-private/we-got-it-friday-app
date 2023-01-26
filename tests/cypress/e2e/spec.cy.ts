describe('Friday App', () => {
  it('displays an info that today is not Friday', () => {
    cy.visit('/')
      .get('#isFriday')
      .should('have.text', 'Piątek? To nie dzisiaj :(');
  });
});
