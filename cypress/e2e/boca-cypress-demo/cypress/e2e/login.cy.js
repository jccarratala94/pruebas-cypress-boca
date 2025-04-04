describe('Prueba de Login', () => {
    it('Flujo de login exitoso y volver a la página principal', () => {
        cy.visit('http://127.0.0.1:5500/src/index.html');
        cy.wait(2000); 
        
        // Acceder al login
        cy.get('[data-cy=menu-login]').should('be.visible').click();
        cy.url().should('include', 'login.html');

        // Llenar el formulario de login
        cy.get('[data-cy=email]').type('usuario@example.com');
        cy.get('[data-cy=password]').type('123456');
        cy.get('[data-cy=submit-login]').click();

        // Esperar la redirección
        cy.wait(1000);
        cy.url().should('include', 'index.html');

        // Verificar que estamos de vuelta en la página principal
        cy.get('[data-cy=menu-login]').should('be.visible');
    });
});
