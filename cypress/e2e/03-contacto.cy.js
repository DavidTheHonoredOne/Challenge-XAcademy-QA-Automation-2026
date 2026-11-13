describe('Contacto',()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
        cy.get('[data-test="nav-contact"]').click()
        cy.wait(20)
    })

    it('Enviar formulario de contacto',()=>{
        cy.fixture('users').then((datos)=>{
            cy.llenarContacto(datos.contacto)
            cy.wait(20)

            cy.get('.alert-success').should('be.visible').and('contain', datos.mensajes.contacto)
        })
    })
})
