<template>
  <v-app id="bg" :dark="theme">
    <v-main>
      <v-container fill-height>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>

      </v-container>

    </v-main>
    <v-footer color="transparent" absolute class="mb-16">
      <NavGroup @nextNote="model++" @prevNote="model--" />
    </v-footer>
  </v-app>
</template>
  
  
<script>
export default {
  data() {
    return {

    }
  },

  computed: {
    theme() {
      console.log('computed')
      if (localStorage.getItem("store")) {
        let local = JSON.parse(localStorage.getItem("store"));
        let { useDarkMode } = local.app
        return useDarkMode

      }
      return true
    }
  },

  beforeCreate() {
    this.$store.commit('app/INITIALIZE_STATE_THEME');
  },
  mounted() {
    this.theme




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
  