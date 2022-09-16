<template>

    <div>
        {{model}}
        <v-col cols="12" class="titleStyle">
            <div class="text-center text-h2 text-uppercase ">
                {{ notes.length < 1 ? 'No notes' : ' All notes' }} </div>

        </v-col>
        <v-row justify="center" align="center">

            <v-col cols="4" class="d-flex align-center" v-if="notes.length < 1">
                <v-img alt="no-note" src="/no_notes.svg" />
            </v-col>

            <v-col>

                <NoteGroup v-model="model" />

            </v-col>


        </v-row>




    </div>
</template>

<script>
export default {

    computed: {
        // ...mapFields([
        //     'notes.noteGroupModel'
        // ]),
        model: {

            get() {
                return this.$store.state.notes.noteGroupModel
            },
            set(value) {
                // this.$store.commit('notes/SET_NOTEGROUPMODEL')

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
.titleStyle {
    top: 0 !important;
}
</style>