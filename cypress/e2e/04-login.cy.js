describe('Login',()=>{

    beforeEach(()=>{
        cy.visit('https://with-bugs.practicesoftwaretesting.com/')
        cy.wait(20)
        cy.get('[data-test="nav-sign-in"]').click()
        cy.wait(20)
    })

    it('Login con pass incorrecta',()=>{
        cy.fixture('users').then((datos)=>{
            cy.login(datos.email, datos.passIncorrecta)
            cy.wait(20)

            cy.get('[data-test="login-error"]').should('be.visible').and('contain', datos.errores.login)
            cy.url().should('include', '/auth/login')
        })
    })
})
