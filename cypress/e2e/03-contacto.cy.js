describe('Contacto', ()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
        cy.get('[data-test="nav-contact"]').click()
        cy.wait(20)
    })

    it('Enviar formulario de contacto', ()=>{
        cy.fixture('users').then((datos)=>{
            cy.llenarContacto(datos.contacto)
            cy.wait(20)

            cy.get('.alert-success').should('be.visible').and('contain', datos.mensajes.contacto)
        })
    })

    it('Bug TC-12 texto Contakt y boton Home redirige a contacto', ()=>{
        cy.get('[data-test="nav-contact"]').should('contain', 'Contakt')
        // cy.get('[data-test="nav-contact"]').should('have.text', 'Contact')

        cy.get('[data-test="nav-home"]').click()
        cy.wait(20)
        cy.url().should('include', '/contact')
    })
})
