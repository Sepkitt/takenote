<template>
    <v-row align="center" justify="center" dense>

        <v-col cols="8">
            <v-window v-model="model" :show-arrows="false" height="100%">
                <v-window-item v-for="(page, pageIndex) in noteGroup.length" :key="pageIndex">

                    <Notes :notes="noteGroup[pageIndex]" />

                </v-window-item>
            </v-window>
        </v-col>
    </v-row>

</template>
  
<script>
export default {
    name: 'NoteGroup',
    props: ['value'],
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            },
        },
        notes() {
            return this.$store.state.notes.notes;
        },
        // isNotesPath() {
        //     return this.$route.path === "/notes" ? true : false;
        // },
        last() {
            let last_element = this.noteGroup.length - 1;
            return last_element;
        },
        noteGroup() {
            // Cards per paged based on screen size
            var chunk_size = this.$vuetify.breakpoint.sm === true ? 4 :
                this.$vuetify.breakpoint.md ? 6 :
                    this.$vuetify.breakpoint.lg ? 6 : 9;
            var arr = this.notes;
            var groups = arr.map(function (e, i) {
                return i % chunk_size === 0 ? arr.slice(i, i + chunk_size) : null;
            }).filter(function (e) {
                return e;
            });
            return groups;
        },


    },

}
</script>
  