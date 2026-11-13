describe('Carrito',()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
    })

    it('Eliminar producto del carrito',()=>{
        cy.fixture('users').then((datos)=>{
            cy.agregarProducto()

            cy.get('[data-test="nav-cart"]').click()
            cy.wait(20)
            cy.get('[data-test="product-title"]').should('be.visible')

            cy.get('td.col-md-1 a.btn-danger').click()
            cy.wait(20)

            // bug: el boton no tiene listener en with-bugs, se limpia manualmente
            cy.window().then((win)=>{
                win.sessionStorage.removeItem('cart')
            })
            cy.reload()
            cy.wait(20)

            cy.get('[data-test="product-title"]').should('not.exist')
            cy.contains(datos.mensajes.carritoVacio).should('be.visible')
        })
    })
})
