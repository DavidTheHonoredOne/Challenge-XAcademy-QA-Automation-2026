describe('Registro', ()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
        cy.get('[data-test="nav-sign-in"]').click()
        cy.wait(20)
        cy.get('[data-test="register-link"]').click()
        cy.wait(20)
    })

    it('Registro con campos vacios', ()=>{
        cy.get('[data-test="register-submit"]').click()
        cy.wait(20)

        cy.get('[data-test="first-name-error"]').should('be.visible')
        cy.get('[data-test="last-name-error"]').should('be.visible')
        cy.get('[data-test="dob-error"]').should('be.visible')
        cy.get('[data-test="address-error"]').should('be.visible')
        cy.get('[data-test="postcode-error"]').should('be.visible')
        cy.get('[data-test="city-error"]').should('be.visible')
        cy.get('[data-test="state-error"]').should('be.visible')
        cy.get('[data-test="country-error"]').should('be.visible')
        cy.get('[data-test="phone-error"]').should('be.visible')
        cy.get('[data-test="email-error"]').should('be.visible')
        cy.get('[data-test="password-error"]').should('be.visible')

        cy.url().should('include', '/auth/register')
    })
})
