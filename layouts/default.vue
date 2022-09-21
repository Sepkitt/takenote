<template>
  <v-app id="bg">

    <v-main>
      <v-container fill-height>
        <v-row dense justify="center">
          <nuxt />
        </v-row>



      </v-container>

    </v-main>
    <v-footer color="background" class="pa-3"  :fixed="$vuetify.breakpoint.xsOnly ? true : false">
      <NavGroup @nextNote="increment()" @prevNote="decrement()" />
    </v-footer>
  </v-app>
</template>
  
  
<script>
import { mapActions } from 'vuex'

export default {

  methods: {
    ...mapActions('notes', [
      'increment',
      'decrement'
    ]),
  },

  beforeCreate() {
    // Keep state of theme
    this.$store.commit('app/INITIALIZE_STATE_THEME');

    // makes v-model on notes/index update
    this.$store.commit('notes/INITIALIZE_STATE_THEME');

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


::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #151B27;
}

::-webkit-scrollbar {
  width: 3px;
  background-color: #151B27;
}

::-webkit-scrollbar-thumb {
  background-color: #6871c7;
  background-image: gradient(linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent));
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
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
  