
Cypress.Commands.add('loginUser', (email, password) => {
  cy.visit('/login.html');
  cy.get('[data-cy="email"]').type(email);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="submit-login"]').click();

  cy.url().should('include', '/index.html', { timeout: 5000 });
});

  Cypress.Commands.add('navigateToTickets', () => {
    cy.get('[data-cy="menu-tickets"]', { timeout: 5000 }) // Espera hasta 5 segundos
      .should('be.visible')
      .click();
    cy.url().should('include', '/tickets.html');
  });
