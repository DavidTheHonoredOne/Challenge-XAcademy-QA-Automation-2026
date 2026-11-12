describe('Validaciones del formulario de registro', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
    cy.get('[data-test="nav-sign-in"]').click();
    cy.wait(200);
    cy.get('[data-test="register-link"]').click();
    cy.wait(200);
  });

  it('Debe mostrar errores de validacion al enviar el formulario sin completar campos', () => {
    cy.fixture('users').then(() => {
      // 1. Confirmar que nos encontramos en la pagina de registro
      cy.url().should('include', '/auth/register');

      // 2. Intentar enviar el formulario vacio
      cy.get('[data-test="register-submit"]').click();
      cy.wait(200);

      // 3. Verificar que aparecen los mensajes de error correspondientes
      cy.get('[data-test="first-name-error"]').should('be.visible');
      cy.get('[data-test="last-name-error"]').should('be.visible');
      cy.get('[data-test="dob-error"]').should('be.visible');
      cy.get('[data-test="address-error"]').should('be.visible');
      cy.get('[data-test="postcode-error"]').should('be.visible');
      cy.get('[data-test="city-error"]').should('be.visible');
      cy.get('[data-test="state-error"]').should('be.visible');
      cy.get('[data-test="country-error"]').should('be.visible');
      cy.get('[data-test="phone-error"]').should('be.visible');
      cy.get('[data-test="email-error"]').should('be.visible');
      cy.get('[data-test="password-error"]').should('be.visible');

      // 4. Verificar que no se creo la cuenta y el usuario permanece en el registro
      cy.url().should('include', '/auth/register');
    });
  });
});
