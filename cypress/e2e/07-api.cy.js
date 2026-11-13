describe('API',()=>{

    it('Login y productos por API',()=>{
        cy.apiLogin().then((token)=>{
            expect(token).to.be.a('string')
            // expect(token).to.not.be.empty

            cy.request({
                method: 'GET',
                url: 'https://api-with-bugs.practicesoftwaretesting.com/products',
                headers: { Authorization: `Bearer ${token}` }
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.data).to.not.be.empty
            })
        })
    })
})
