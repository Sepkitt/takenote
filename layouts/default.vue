<template>
  <v-app id="bg">
    <v-main>
      <v-container fill-height>

        <nuxt />


      </v-container>

    </v-main>
    <v-footer color="transparent" absolute class="mb-16">
      <NavGroup @nextNote="increment()" @prevNote="decrement()" />
    </v-footer>
  </v-app>
</template>
  
  
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {

    }
  },

  methods: {
    ...mapActions('notes', [
      'increment',
      'decrement'
    ]),
  },

  computed: {
    // theme() {
    //   if (localStorage.getItem("store")) {
    //     let local = JSON.parse(localStorage.getItem("store"));
    //     let { useDarkMode } = local.app
    //     return useDarkMode

    //   }
    //   return true
    // }
  },

  beforeCreate() {
    // Keep state of theme
    this.$store.commit('app/INITIALIZE_STATE_THEME');

    // makes v-model on notes/index update
    this.$store.commit('notes/INITIALIZE_STATE_THEME');

  },
  mounted() {
    // this.theme




    //todo - keep the state of the theme
    // const local = JSON.parse(localStorage.getItem("store"));
    // const { useDarkMode } = local.app
    // console.log(useDarkMode)


    // if (useDarkMode === true) {
    //     this.$vuetify.theme.dark = true;
    // }
    // else
    //     this.$vuetify.theme.dark = false

    // const theme = this.$store.getters['app/getTheme']
    // console.log({theme})

    // if (theme) {
    //     if (theme === 'true') {
    //         this.$vuetify.theme.dark = true
    //     } else {
    //         this.$vuetify.theme.dark = false
    //     }
    // }

  },

}


</script>
  
<style >
a {
  text-decoration: none;
}

html {
  overflow-y: auto !important;
}


/* #app {
    font-family: Helvetica;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  } */
/* 
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  } */
</style>
  