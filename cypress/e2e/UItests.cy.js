//
describe('UI test', () => {
  
  it('should sort items by Name (A -> Z) and Name (Z -> A)', () => {
    // Visit the website
    cy.visit('https://www.saucedemo.com/')

    // Type in username and password and click login button
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('[data-test=login-button]').click()

    // Select the option for sorting by Name (A -> Z) and verify that it is selected
    cy.get('[data-test=product_sort_container]').select('Name (A to Z)')
    cy.get('[data-test=product_sort_container]').should('have.value', 'az')

    // Get the text for all items sorted by Name (A -> Z), log them, and verify the sorting
    cy.get('.inventory_item_name')
      .invoke('text')
      .then((text) => {
        const itemsAz = text.split('\n')
        cy.log(`Items sorted by Name (A -> Z): ${itemsAz}`)
        expect(itemsAz).to.eql(itemsAz.sort())
      })

    // Select the option for sorting by Name (Z -> A) and verify that it is selected
    cy.get('[data-test=product_sort_container]').select('Name (Z to A)')
    cy.get('[data-test=product_sort_container]').should('have.value', 'za')

    // Get the text for all items sorted by Name (Z -> A), log them, and verify the sorting
    cy.get('.inventory_item_name')
      .invoke('text')
      .then((text) => {
        const itemsZa = text.split('\n')
        cy.log(`Items sorted by Name (Z -> A): ${itemsZa}`)
        expect(itemsZa).to.eql(itemsZa.sort().reverse())
      })
  })
})
