describe('Busqueda de productos', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
  });

  it('Debe buscar herramientas por palabra clave y presentar resultados coincidentes', () => {
    cy.fixture('users').then((datos) => {
      // 1. Asegurar visualizacion del catalogo en la portada
      cy.get('[data-test="product-name"]').should('have.length.greaterThan', 0);

      // 2. Ingresar termino de busqueda del fixture y ejecutar consulta
      cy.get('[data-test="search-query"]').clear().type(datos.productoBusqueda);
      cy.get('[data-test="search-submit"]').click();
      cy.wait(500);

      // 3. Validar presencia de elementos resultantes
      cy.get('[data-test="product-name"]').should('have.length.greaterThan', 0);

      // 4. Comprobar que el nombre del primer producto incluye el termino buscado
      cy.get('[data-test="product-name"]')
        .first()
        .should('contain.text', datos.productoBusqueda);
    });
  });
});
