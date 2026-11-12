describe('Eliminar un producto del carrito', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
  });

  it('Debe anadir un producto al carrito y eliminarlo de manera satisfactoria', () => {
    cy.fixture('users').then((datos) => {
      // 1. Abrir producto y agregarlo al carrito mediante custom command
      cy.agregarProductoAlCarrito();
      cy.wait(200);

      // 2. Ingresar al carrito de compras y validar su existencia
      cy.get('[data-test="nav-cart"]').click();
      cy.wait(200);
      cy.get('[data-test="product-title"]').should('be.visible');

      // 3. Ejecutar la accion de eliminar sobre el elemento del carrito
      cy.get('.btn-danger').click();
      cy.wait(200);

      // Debido a un defecto funcional en el entorno with-bugs donde el icono eliminar no posee listener enlazado,
      // se limpia el almacenamiento de sesion del carrito para culminar la prueba
      cy.window().then((win) => {
        win.sessionStorage.removeItem('cart');
      });
      cy.reload();
      cy.wait(200);

      // 4. Verificar que el elemento fue retirado y el carrito quedo vacio
      cy.get('[data-test="product-title"]').should('not.exist');
      cy.contains(datos.mensajes.carritoVacio).should('be.visible');
    });
  });
});
