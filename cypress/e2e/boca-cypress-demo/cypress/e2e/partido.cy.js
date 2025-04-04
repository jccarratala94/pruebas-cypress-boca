
describe('Flujo de navegación en la página de partido', () => {
  it('Debe ingresar a la página de inicio, ver detalles del partido y volver', () => {

    cy.visit('http://127.0.0.1:5500/src/index.html');
    cy.wait(2000); 

    cy.get('[data-cy="menu-match-details"]', { timeout: 5000 }).should('be.visible').click();
    cy.url().should('include', 'partido.html');cy.wait(2000);
    
    cy.get('[data-cy="titulo-partido"]').should('be.visible');
    cy.get('[data-cy="equipo-local"]').should('be.visible');
    
    cy.get('[data-cy="volver-inicio"]').click();
    cy.url().should('include', 'http://127.0.0.1:5500/src/index.html');
  });
});

