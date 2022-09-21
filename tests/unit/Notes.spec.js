// import {shallowMount, createLocalVue } from '@vue/test-utils'
// import NotesForm from '@/components/NotesForm.vue'
// // import  mutations  from '~/store/notes/index'
// import Vuetify from 'vuetify'
// import Vuex from 'vuex'
// import notesModule from '~/store/notes'
// import { jest } from '@jest/globals'

// // Creates local copy of Vue
// const localVue = createLocalVue()

// localVue.use(Vuex)

// let actions
//     let state
//     // let mutations
//     let store
//     let wrapper;

//     beforeEach(() => {
//         let vuetify = new Vuetify()

//         state = {notes: [], noteGroupModel: 0}
//         actions = {
//             increment: jest.fn(),
//             decrement: jest.fn()
//         }

//         store = new Vuex.Store({
//             modules: {
//                 notesModule: {
//                     state,
//                     actions,
//                     mutations: notesModule.mutations,
//                     getters:notesModule.getters,
//                     namespaced:true
//                 }
//             }
//         })

//         wrapper = shallowMount(NotesForm, {
//             propsData: {
//                 value: ''
//             },
//             localVue,

//             vuetify
//         })
//     })
//     afterEach(() => {
//         wrapper.destroy()
//     })

// describe('NotesForm.vue', () => {
    
    
//     it('renders initial prop values', () => {
//         expect(wrapper.props().value).toBe('')
//     });


//     it("Should go to the noteContent if the User presses the ENTER key", async () => {
//     wrapper.vm.focusOnNoteContent = jest.fn(); // Mock function first

//         await wrapper.find(".note-title").trigger("keydown.enter"); // trigger function
//         expect(wrapper.vm.focusOnNoteContent).toHaveBeenCalled();   //check if function has been called
    
//     });
          
    
//     it('should save new note to store', async() => {
//         const newNote = [{
//                 id: 1,
//                 title: "Note title",
//                 content: "Note content here"
//         }]
//         // Mock function
//         wrapper.vm.saveNotes = jest.fn();
//         await wrapper.vm.$nextTick();
//         // Trigger click event
//         await wrapper.find(".note-saveBtn").trigger("click");
//         // Mock state
//         state.notes = newNote;    

//         expect(state.notes).toBe(newNote);
//     })

    

//     })
