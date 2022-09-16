  const state = () => ({
    useDarkMode: false

  });
  
  const mutations = {
    SET_USE_DARK_MODE(state, useDarkMode) {
      state.useDarkMode = useDarkMode
    },
    INITIALIZE_STATE_THEME(state) {
        // Check if the ID exists
        if(localStorage.getItem('store')) {
		    // Replace the state object with the stored item
            this.replaceState(
                Object.assign(state, JSON.parse(localStorage.getItem('store')))
            )

        }
    }
  }
  
  const getters = {
    getTheme(state) {
      return state.useDarkMode
    }
  }
  
  export default {
    state,
    mutations,
    getters
  }
  