
  
  const state = () => ({
    notes: [],
    noteGroupModel:0
  
  });
  
  const mutations = {
    INITIALIZE_STATE_THEME(state) {
      // Check if the ID exists
      if(localStorage.getItem('store')) {
      // Replace the state object with the stored item
          this.replaceState(
              Object.assign(state, JSON.parse(localStorage.getItem('store')))
          )

      }
  },
    // SET_NOTEGROUP_MODEL(state, noteGroupModel) {
    //   state.noteGroupModel = noteGroupModel
    // },
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
    },

    INCREMENT_NOTEGROUP_MODEL(state)  {
      console.log('Mutation Increment')

      state.noteGroupModel++
      
    },
    DECREMENT_NOTEGROUP_MODEL(state) {
      console.log('Mutation decrement')
      state.noteGroupModel--

      
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

  const actions = {
    increment({commit}) {
      console.log('increment')
      commit('INCREMENT_NOTEGROUP_MODEL')
    },
    decrement({commit}) {
      console.log('Decrement')

      commit('DECREMENT_NOTEGROUP_MODEL')
    }
  }
  
  
  export default {
    state,
    mutations,
    getters,
    actions
  }
  