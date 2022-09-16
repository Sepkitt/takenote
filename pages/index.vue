<template>
  <v-row class="home" justify="center">
    <!-- Landing page -->
    <v-col cols="6">
      <v-img alt="Vue logo" src="/hero_dark.svg" v-if="isDark === true" />
      <v-img alt="Vue logo" src="/hero_light.svg" v-else />

    </v-col>
    <!-- <h1 class="font-weight-regular text-lgAndUp-h1 text-md-h2 text-h3 title--text text-center">TAKE NOTE
    </h1> -->
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',

  computed: {
    isDark() {

      return this.$vuetify.theme.isDark;
    },
    // titleSize() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs':
    //       return 'h4'
    //     case 'sm':
    //       return 'h3'
    //     case 'md':
    //       return 'h2'
    //     case 'lg':
    //       return 'h1'
    //     case 'xl':
    //       return 'text-xl-h1'
    //   }
    // }
  }
}
</script>

<style lang="scss">

</style>
