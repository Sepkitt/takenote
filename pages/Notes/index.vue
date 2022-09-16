<template>

    <v-row justify="center">
        <div>{{notes.length < 1 ? 'No notes' : ' All notes' }}</div>
                <v-col cols="5" v-if="notes.length < 1">
                    <v-img alt="Vue logo" src="/hero_dark.svg" v-if="isDark === true" />
                    <v-img alt="Vue logo" src="/notes_light.svg" v-else />

                </v-col>

                <v-col>
                    {{model}}

                    <NoteGroup v-model="model" />

                </v-col>


    </v-row>

</template>

<script>
export default {
    // data() {
    //     return {
    //         model:
    //     }
    // },
    computed: {
        // ...mapFields([
        //     'notes.noteGroupModel'
        // ]),
        model: {

            get() {
                return this.$store.state.notes.noteGroupModel
            },
            set(value) {
                this.$store.commit('notes/SET_NOTEGROUPMODEL')

            }

        },
        isDark() {
            console.log(process)

            return this.$vuetify.theme.isDark;
        },

        notes() {
            return this.$store.state.notes.notes;
        }
    },

    watch: {
        //if the state has been change eg. a commit was made to the store, run fetch function
        model() {
            this.increment
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