describe('Compra exitosa', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
  });

  it('Debe completar el flujo de compra satisfactoriamente hasta confirmar la orden', () => {
    cy.fixture('users').then((datos) => {
      // 1. Entrar a la pagina principal y verificar que se muestran productos
      cy.get('[data-test="product-name"]').should('have.length.greaterThan', 0);

      // 2. Abrir un producto y agregarlo al carrito mediante custom command
      cy.agregarProductoAlCarrito();

      // 3. Ir al carrito y verificar que el producto esta presente
      cy.get('[data-test="nav-cart"]').click();
      cy.wait(200);
      cy.get('[data-test="product-title"]').should('be.visible');

      // Avanzar al paso de identificacion
      cy.get('[data-test="proceed-1"]').click();
      cy.wait(200);

      // 4. Iniciar sesion con credenciales del fixture usando custom command
      cy.iniciarSesion(datos.emailValido, datos.passwordValido);
      cy.wait(500);
      cy.get('[data-test="proceed-2"]').click();
      cy.wait(200);

      // Completar campos de direccion requeridos si aparecen vacios debido al bug de datos de usuario
      cy.get('[data-test="address"]').clear().type(datos.direccion.calle);
      cy.get('[data-test="city"]').clear().type(datos.direccion.ciudad);
      cy.get('[data-test="state"]').clear().type(datos.direccion.estado);
      cy.get('[data-test="country"]').clear().type(datos.direccion.pais);
      cy.get('[data-test="postcode"]').clear().type(datos.direccion.codigoPostal);
      cy.get('[data-test="proceed-3"]').click();
      cy.wait(200);

      // 5. Seleccionar metodo de pago y completar datos bancarios del fixture
      cy.get('[data-test="payment-method"]').select(datos.pago.metodo);
      cy.get('[data-test="account-name"]').clear().type(datos.pago.nombreTitular);
      cy.get('[data-test="account-number"]').clear().type(datos.pago.numeroCuenta);
      cy.get('[data-test="finish"]').click();
      cy.wait(500);

      // 6. Verificar que aparece el mensaje de confirmacion de compra
      cy.contains(datos.mensajes.compraExitosa).should('be.visible');
    });
  });
});
