<template>
  <!-- Landing page -->
  <div class="d-flex align-center">
    <v-row justify="center">
      <v-col cols="8">
        <v-img alt="Vue logo" src="/hero_dark.svg" v-if="isDark === true" />
        <v-img alt="Vue logo" src="/hero_light.svg" v-else />

      </v-col>
    </v-row>
  </div>


</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',

  computed: {
    isDark() {

      return this.$vuetify.theme.isDark;
    },

  }
}
</script>

<style lang="scss">

</style>
