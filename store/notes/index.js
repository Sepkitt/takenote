
  
  const state = () => ({
    notes: []
  
  });
  
  const mutations = {
    setNotes(state, notes) {
      state.notes = notes
    },
    addNote(state, notes) {
        state.notes.push(notes)

    }
  }
  
  const getters = {
    getNotes(state) {
      return state.notes
    },
    getNoteByTitle: (state) => (title) => {
        //seperates it into individual objects
        return state.notes.find(res => res.title === title)
    
      },
  }
  
  export default {
    state,
    mutations,
    getters
  }
  