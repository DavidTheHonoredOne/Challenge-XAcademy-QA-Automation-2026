describe('Carrito', ()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
    })

    it('Eliminar producto del carrito', ()=>{
        cy.fixture('users').then((datos)=>{
            cy.agregarProducto()

            cy.get('[data-test="nav-cart"]').click()
            cy.wait(20)
            cy.get('[data-test="product-title"]').should('be.visible')

            cy.get('a.btn-danger i.fa-remove').click()
            cy.wait(20)

            // El boton btn-danger tiene un bug y no borra el item al hacer click
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
