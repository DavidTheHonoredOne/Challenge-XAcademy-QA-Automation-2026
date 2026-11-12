Cypress.Commands.add('login', (email, password)=>{
    cy.get('[data-test="email"]').clear().type(email)
    cy.get('[data-test="password"]').clear().type(password)
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('agregarProducto', ()=>{
    cy.get('[data-test="product-name"]').first().click()
    cy.wait(20)
    cy.get('[data-test="add-to-cart"]').click()
    cy.wait(20)
})

Cypress.Commands.add('llenarContacto', (contacto)=>{
    cy.get('[data-test="first-name"]').type(contacto.nombre)
    cy.get('[data-test="last-name"]').type(contacto.apellido)
    cy.get('[data-test="email"]').type(contacto.email)
    cy.get('[data-test="subject"]').select(contacto.asunto)
    cy.get('[data-test="message"]').type(contacto.mensaje)
    cy.get('[data-test="contact-submit"]').click()
})
