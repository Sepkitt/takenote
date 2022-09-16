<template>

    <v-row justify="center">
    <div>{{notes.length < 1 ? 'No notes' : ' All notes'}}</div>
        <v-col cols="5" v-if="notes.length < 1">
      <v-img alt="Vue logo" src="/hero_dark.svg" v-if="isDark === true" />
      <v-img alt="Vue logo" src="/notes_light.svg" v-else />

    </v-col>

    <v-col>
        <NoteGroup v-model="model" />

    </v-col>
      

    </v-row>

</template>

<script>
export default {
    data() {
        return {
            model: 0
        }
    },
    computed: {
        isDark() {
      console.log(process)

      return this.$vuetify.theme.isDark;
    },

        notes() {
            return this.$store.state.notes.notes;
        }
    },

    methods: {
        nextNote() {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>