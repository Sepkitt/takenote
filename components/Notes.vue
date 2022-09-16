<template>
    <v-row justify="center">

        <v-col v-for="note in notes" :key="note.index" cols="12" sm="6" md="4">

            <nuxt-link :to="`/notes/${note.title}`">

                <v-card class="noteCard" flat height="136px" width="500px" color="itemBgColor">
                    <v-row no-gutters>
                        <v-col class="d-flex justify-end pa-2">
                            <v-icon color="primary" v-text="'la-edit'" large />
                        </v-col>
                        <v-col cols="12">
                            <v-card-title class="title--text" v-text="note.title" />

                            <v-card-subtitle class="text--text" :class="isNotesPath === true ? 'text-truncate' : ''"
                                v-text="note.content" />

                        </v-col>

                    </v-row>
                </v-card>

            </nuxt-link>
        </v-col>

    </v-row>
</template>

<script>
export default {
    name: 'Notes',
    props: {
        notes: {
            type: Array
        }
    },
    computed: {
        isNotesPath() {
            return this.$route.path === '/notes' ? true : false
        }

    },
}
</script>
