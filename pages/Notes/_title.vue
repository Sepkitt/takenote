<template>
    <NotesForm @save="saveNote" v-model="editNote" />
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
    computed: {

        getNote() {
            //get note from store based on $route
            return this.$store.getters['notes/getNoteByTitle'](this.$route.params.title)
        },
        editNote() {
            let note = { ...this.getNote }
            return note
        }
    },

    methods: {
        saveNote() {

            this.$store.commit('notes/UPDATE_NOTE', this.editNote)
            this.$nextTick(() => {
                this.$router.push('/notes')
            })





        },
    }
}
</script>

<style lang="scss" scoped>

</style>