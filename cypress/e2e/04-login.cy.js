describe('Inicio de sesion con datos incorrectos', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
    cy.get('[data-test="nav-sign-in"]').click();
    cy.wait(200);
  });

  it('Debe mostrar error al intentar acceder con contrasena no valida', () => {
    cy.fixture('users').then((datos) => {
      // 1. Confirmar permanencia en la vista de autenticacion
      cy.url().should('include', '/auth/login');

      // 2 y 3. Ingresar credenciales erroneas y enviar formulario con custom command
      cy.iniciarSesion(datos.emailValido, datos.passwordIncorrecto);
      cy.wait(500);

      // 4. Verificar mensaje de error en pantalla
      cy.get('[data-test="login-error"]')
        .should('be.visible')
        .and('contain.text', datos.errores.loginInvalido);

      // 5. Validar que la sesion no inicio y seguimos en la pagina de login
      cy.url().should('include', '/auth/login');
    });
  });
});
