import {shallowMount } from '@vue/test-utils'
import NotesForm from '@/components/NotesForm.vue'
import { Store } from 'vuex-mock-store'

// create the Store mock
const store = new Store ({
    state: {
            notes: {
                notes: [
                 
                ]}},
  })
  
  // add other mocks here so they are accessible in every component
  // could also be added globally in a setup.js file
  const mocks = {
    $store: store,
  }

    // reset spies, initial state and getters
  afterEach(() => store.reset())
  

describe('NotesForm.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(NotesForm, {
            propsData: {
                value: ''
            },
            mocks
        })
    })
    it('renders initial prop values', () => {
        expect(wrapper.props().value).toBe('')
    })


    it("Should go to the noteContent if the User presses the ENTER key", async () => {
    wrapper.vm.focusOnNoteContent = jest.fn(); // Mock function first

        await wrapper.find(".note-title").trigger("keydown.enter"); // trigger function
        expect(wrapper.vm.focusOnNoteContent).toHaveBeenCalled();   //check if function has been called
    
    });

        let noteTitle;
        let noteContent;
        let newNote;
        beforeEach(() => {
          
            noteTitle = wrapper.find(".note-title"); // Find the input-field
            noteTitle.element.value = "new note"; // set v-model to New Todo
            noteTitle.trigger("input"); // Trigger the input
            noteContent = wrapper.find(".note-content"); 
            noteContent.element.value = "Sample note content"
            noteContent.trigger("input")
            newNote = [{
                id: 1,
                title: "Note title",
                content: "Note content here"
            }]
    
           

        })
    
    it('should save new note', async() => {
        wrapper.vm.saveNotes = jest.fn();
        await wrapper.vm.$nextTick();
        await wrapper.find(".note-saveBtn").trigger("click");
        store.state.notes.notes = newNote;
        expect(newNote).toBe(store.state.notes.notes);
    })

    })

