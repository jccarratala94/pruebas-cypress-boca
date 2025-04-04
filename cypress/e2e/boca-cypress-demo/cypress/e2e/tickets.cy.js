describe('Validación de pago - Compra de entradas Boca Juniors', () => {
  it('Debe completar la compra con un pago válido y regresar a la página principal', { retries: 2 }, () => {
    // 1️⃣ Visitar la página principal
    cy.visit('http://127.0.0.1:5500/src/index.html');
    cy.url().should('include', 'index.html');

    // 2️⃣ Navegar a tickets.html
    cy.get('[data-cy="menu-tickets"]').should('be.visible').click();
    cy.url().should('include', 'tickets.html');

    // 3️⃣ Seleccionar partido
    cy.get('[data-cy="match-river"]').click();
    cy.get('[data-cy="selected-match"]').should('contain', 'vs River Plate');

    // 4️⃣ Seleccionar asientos
    cy.get('[data-cy="seat-A12"]').click().should('have.class', 'selected');
    cy.get('[data-cy="seat-B15"]').click().should('have.class', 'selected');

    // 5️⃣ Verificar actualización del contador de asientos
    cy.get('[data-cy="total-seats"]').should('contain', 'Asientos seleccionados: 2');

    // 6️⃣ Asegurar que el botón de pago está habilitado y hacer clic
    cy.get('[data-cy="btn-payment"]').should('not.be.disabled').click();

    // 7️⃣ Verificar que el modal de pago aparece
    cy.get('[data-cy="payment-modal"]').should('be.visible');

    // 8️⃣ Ingresar datos de la tarjeta
    cy.get('[data-cy="card-number"]').type('4242424242424242');

    // 9️⃣ Verificar que el botón "Pagar ahora" se habilita y hacer clic
    cy.get('[data-cy="pay-now"]').should('not.be.disabled').click();

    // 🔟 Verificar mensaje de éxito
    cy.get('[data-cy="success-message"]')
      .should('be.visible')
      .and('contain', '¡Compra exitosa! 🎉')
      .and('have.css', 'display', 'block');

    // 1️⃣1️⃣ Verificar que los asientos se resetean
    cy.get('[data-cy="total-seats"]').should('contain', 'Asientos seleccionados: 0');
    cy.get('[data-cy="seat-A12"]').should('not.have.class', 'selected');
    cy.get('[data-cy="seat-B15"]').should('not.have.class', 'selected');

    // 1️⃣2️⃣ Volver a la página principal
    cy.get('[data-cy="btn-back-home"]').should('be.visible').click();
    cy.url().should('include', 'index.html');
  });
});
