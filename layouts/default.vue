<template>
  <v-app id="app">
    <!-- <v-app-bar>

    </v-app-bar> -->
    <v-main>
      <v-container fill-height>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <nuxt />
          </v-col>

          
         
        </v-row>

      </v-container>

    </v-main>
    <v-footer color="transparent" absolute  class="mb-16">
            <Group />
          </v-footer>
  </v-app>
</template>


<script>
import Group from '~/components/Nav/Group.vue';
export default {
    components: { Group }
}


</script>

<style>
a {
  text-decoration: none;
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
