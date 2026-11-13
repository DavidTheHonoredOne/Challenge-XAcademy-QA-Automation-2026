describe('Busqueda',()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
    })

    it('Buscar producto',()=>{
        cy.fixture('users').then((datos)=>{
            cy.get('[data-test="search-query"]').type(datos.producto)
            cy.get('[data-test="search-submit"]').click()
            cy.wait(20)

            cy.get('[data-test="product-name"]').should('be.visible')
            // cy.get('[data-test="product-name"]').should('have.length.greaterThan', 0)
            cy.get('[data-test="product-name"]').first().should('contain', datos.producto)
        })
    })
})
