import Notes from './Notes.vue'

describe('<Notes />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Notes)
  })
})