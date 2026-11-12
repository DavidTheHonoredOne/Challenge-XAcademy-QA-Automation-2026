// Comando para iniciar sesion tanto en login como en checkout
Cypress.Commands.add('iniciarSesion', (email, password) => {
  cy.get('[data-test="email"]').clear().type(email);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-submit"]').click();
});

// Comando para seleccionar el primer producto y agregarlo al carrito
Cypress.Commands.add('agregarProductoAlCarrito', () => {
  cy.get('[data-test="product-name"]').first().click();
  cy.wait(200);
  cy.get('[data-test="add-to-cart"]').click();
  cy.wait(200);
});

// Comando para completar y enviar el formulario de contacto
Cypress.Commands.add('completarContacto', (datosContacto) => {
  cy.get('[data-test="first-name"]').clear().type(datosContacto.nombre);
  cy.get('[data-test="last-name"]').clear().type(datosContacto.apellido);
  cy.get('[data-test="email"]').clear().type(datosContacto.email);
  cy.get('[data-test="subject"]').select(datosContacto.asunto);
  cy.get('[data-test="message"]').clear().type(datosContacto.mensaje);
  cy.get('[data-test="contact-submit"]').click();
});
