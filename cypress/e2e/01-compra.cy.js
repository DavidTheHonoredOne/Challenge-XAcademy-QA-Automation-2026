describe('Compra',()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
    })

    it('Compra exitosa',()=>{
        cy.fixture('users').then((datos)=>{
            cy.get('[data-test="product-name"]').should('be.visible')

            cy.agregarProducto()

            cy.get('[data-test="nav-cart"]').click()
            cy.wait(20)
            cy.get('[data-test="product-title"]').should('be.visible')
            cy.get('[data-test="proceed-1"]').click()
            cy.wait(20)

            cy.login(datos.email, datos.password)
            cy.wait(20)
            cy.get('[data-test="proceed-2"]').click()
            cy.wait(20)

            cy.get('[data-test="address"]').clear().type(datos.direccion.calle)
            cy.get('[data-test="city"]').clear().type(datos.direccion.ciudad)
            cy.get('[data-test="state"]').clear().type(datos.direccion.estado)
            cy.get('[data-test="country"]').clear().type(datos.direccion.pais)
            cy.get('[data-test="postcode"]').clear().type(datos.direccion.codigoPostal)
            cy.get('[data-test="proceed-3"]').click()
            cy.wait(20)

            cy.get('[data-test="payment-method"]').select(datos.pago.metodo)
            cy.get('[data-test="account-name"]').type(datos.pago.titular)
            cy.get('[data-test="account-number"]').type(datos.pago.cuenta)
            cy.get('[data-test="finish"]').click()
            cy.wait(20)

            cy.contains(datos.mensajes.compra).should('be.visible')
        })
    })
})
