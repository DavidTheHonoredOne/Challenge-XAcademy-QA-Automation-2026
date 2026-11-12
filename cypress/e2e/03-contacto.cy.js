describe('Formulario de contacto', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
    cy.get('[data-test="nav-contact"]').click();
    cy.wait(200);
  });

  it('Debe enviar un mensaje satisfactoriamente con datos validos', () => {
    cy.fixture('users').then((datos) => {
      // 1. Verificar presencia en el formulario de contacto
      cy.url().should('include', '/contact');

      // 2 y 3. Completar campos y enviar formulario mediante custom command
      cy.completarContacto(datos.contacto);
      cy.wait(500);

      // 4. Verificar la confirmacion de envio exitoso
      cy.get('.alert-success')
        .should('be.visible')
        .and('contain.text', datos.mensajes.contactoExitoso);
    });
  });
});
