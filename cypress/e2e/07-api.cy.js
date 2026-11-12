describe('API', ()=>{

    it('Productos y login por API', ()=>{
        cy.fixture('users').then((datos)=>{
            cy.request('GET', 'https://api-with-bugs.practicesoftwaretesting.com/products').then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.data).to.not.be.empty
            })

            cy.request('POST', 'https://api-with-bugs.practicesoftwaretesting.com/users/login', {
                email: datos.email,
                password: datos.password
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).to.have.property('access_token')
            })
        })
    })
})
