// Comando para navegar a la sección de entradas
Cypress.Commands.add('navigateToTickets', () => {
    cy.get('[data-cy="menu-tickets"]').click();
    cy.url().should('include', '/entradas');
  });
  
  // Comando para login de usuario (si es necesario)
  Cypress.Commands.add('loginUser', (email, password) => {
    cy.visit('/login');
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="password"]').type(password);
    cy.get('[data-cy="submit-login"]').click();
  });
  // commands.js
Cypress.Commands.add('selectSeat', (seatId) => {
  cy.get(`[data-cy="seat-${seatId}"]`).click();
});