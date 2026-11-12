describe('Prueba de API', () => {
  it('Debe consultar la lista de productos e iniciar sesion mediante servicios API', () => {
    cy.fixture('users').then((datos) => {
      // 1. Obtener listado de productos y verificar status 200 junto con datos no vacios
      cy.request({
        method: 'GET',
        url: datos.api.urlProductos,
      }).then((respuestaProductos) => {
        expect(respuestaProductos.status).to.eq(200);
        expect(respuestaProductos.body.data).to.be.an('array').that.is.not.empty;
      });

      // 2. Ejecutar inicio de sesion por endpoint de autenticacion y validar token recibido
      cy.request({
        method: 'POST',
        url: datos.api.urlLogin,
        body: {
          email: datos.emailValido,
          password: datos.passwordValido,
        },
      }).then((respuestaLogin) => {
        expect(respuestaLogin.status).to.eq(200);
        expect(respuestaLogin.body).to.have.property('access_token');
      });
    });
  });
});
