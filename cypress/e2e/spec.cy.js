describe('API test', () => {
  it('should find objects with Category: Authentication & Authorization', () => {
    cy.request('https://api.publicapis.org/entries')
      .then((response) => {
        const objects = response.body.entries.filter((entry) => entry.Category === 'Authentication & Authorization')
        const count = objects.length
        cy.log(`Found ${count} objects with Category: Authentication & Authorization`)
        cy.log(objects)
        expect(count).to.be.greaterThan(0)
      })
  })
})