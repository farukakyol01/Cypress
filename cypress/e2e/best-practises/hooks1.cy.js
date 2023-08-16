
describe('Hooks Basics', function(){

before(function(){

cy.log('Before block')

})
beforeEach(function(){

cy.log('Before each block')


})

it('Search Item', function(){

cy.log('This is search item block')


})

it('Order Item',function(){

cy.log('This is order item block')

})

it('Checkout Item',function(){


    cy.log('This is Checkout item block')
})

this.afterEach(function(){

    cy.log('after each block')
})

after(function(){

cy.log('After block')



})


})