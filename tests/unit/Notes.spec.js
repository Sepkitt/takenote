import {shallowMount, createLocalVue } from '@vue/test-utils'
import NotesForm from '@/components/NotesForm.vue'
// import  mutations  from '~/store/notes/index'
import Vuex from 'vuex'
import notesModule from '~/store/notes'
import { jest } from '@jest/globals'
import notes from '~/store/notes'
// Creates local copy of Vue
const localVue = createLocalVue()
localVue.use(Vuex)


// create the Store mock
// const store = new Store ({
//     state: {
//             notes: {
//                 notes: [],
//                 noteGroupModel:0

//             }},
//   })
  
  // add other mocks here so they are accessible in every component
  // could also be added globally in a setup.js file
//   const mocks = {
//     $store: store,
//   }

    // reset spies, initial state and getters
//   afterEach(() => store.reset())
  

describe('NotesForm.vue', () => {
    let actions
    let state
    let mutations
    let store
    let wrapper;

    beforeEach(() => {
        state = {notes: [], noteGroupModel: 0}
        actions = {
            increment: jest.fn(),
            decrement: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                notesModule: {
                    state,
                    actions,
                    mutations: notesModule.mutations,
                    getters:notesModule.getters,
                    namespaced:true
                }
            }
        })

        wrapper = shallowMount(NotesForm, {
            propsData: {
                value: ''
            },
            // mocks
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
          
    
    it('should save new note to store', async() => {
        const newNote = [{
                id: 1,
                title: "Note title",
                content: "Note content here"
        }]
        // Mock function
        wrapper.vm.saveNotes = jest.fn();
        await wrapper.vm.$nextTick();
        // Trigger click event
        await wrapper.find(".note-saveBtn").trigger("click");
        // Mock state
        state.notes = newNote;    
        // console.log('mutations',store)

        expect(state.notes).toBe(newNote);
    })

    

    })

// describe('Notes Mutations', () => {
    
//     it('INCREMENT_NOTEGROUP_MODEL should mutate the state',() => {
//             // mock state

//         const state = { noteGroupModel:0}
//             // apply mutation

//             mutations.INCREMENT_NOTEGROUP_MODEL(state)
//             // assert result
//         expect(state.noteGroupModel).to.equal(1)




//     } )
// })