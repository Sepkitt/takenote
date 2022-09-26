// Navigate to home page

describe('Create a new note', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('/notes/new')
    })

// Go to /new

it('Create a new note and Save', () => {
  const newNote = {
                    title: "Note title",
                    content: "Note content here"
            }

  cy.get('#noteTitle').type(newNote.title)
  cy.get('#noteContent').type(newNote.title)
  cy.get('#saveNote').click()

  cy.location('pathname').should('eq', '/notes')
})


})  

