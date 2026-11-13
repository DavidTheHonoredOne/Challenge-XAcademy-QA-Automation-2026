describe('Bug TC-12',()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
    })

    it('Nav muestra Contakt y Home redirige a contact',()=>{
        cy.get('[data-test="nav-contact"]').should('contain', 'Contakt')
        // cy.get('[data-test="nav-contact"]').should('contain', 'Contact')

        cy.get('[data-test="nav-home"]').click()
        cy.wait(20)
        cy.url().should('include', '/contact')
    })
})
