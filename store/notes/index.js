
  
  const state = () => ({
    notes: []
  
  });
  
  const mutations = {
    SET_NOTES(state, notes) {
      state.notes = notes
    },
    ADD_NOTE(state, notes) {
        state.notes.push(notes)

    },
    DELETE_NOTE(state, id) {
      let notes = state.notes.filter(note => note.id != id)
      state.notes = notes
    },
    UPDATE_NOTE(state, payload)  {
      // state.notes = [
      //   ...state.notes.map(note =>
      //     note.id !== payload.id ? note : {...item, ...payload})
      // ]
      
      state.notes = state.notes.map((note) => {
        if(note.id == payload.id) {
          return Object.assign({}, note, payload)
        }
        return note;
      })
    }
  }
  
  const getters = {
    getNotes(state) {
      return state.notes
    },
    getNoteByTitle: (state) => (title) => {
        //seperates it into individual objects
        return state.notes.find(note => note.title === title)
    
      },
  }
  
  export default {
    state,
    mutations,
    getters
  }
  