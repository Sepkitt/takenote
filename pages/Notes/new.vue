<template>
    <div>
        <div>
            <h1>Create Note</h1>
        </div>
        <v-container fluid fill-height>
            <v-row justify="center">
                <v-col class="d-flex justify-center align-center">


                    <NotesForm @save="saveNotes" v-model="note" />


                </v-col>

            </v-row>

        </v-container>

    </div>
</template>

<script>
import NotesForm from '~/components/NotesForm.vue';
export default {
    components: { NotesForm },
    data() {
        return {
            note: {
                title: '',
                content: ''
            }
        }
    },


    methods: {
        saveNotes() {
            // save note and navigate to the All notes page
            let noteId = _.uniqueId();

            // Printing the output  
            let newNote = {
                id: noteId,
                title: this.note.title,
                content: this.note.content

            }
            this.$store.commit('notes/ADD_NOTE', newNote)

            this.$nextTick(() => {
                this.$router.push('/notes')
            })





        },
    }
}
</script>

<style lang="scss" scoped>

</style>