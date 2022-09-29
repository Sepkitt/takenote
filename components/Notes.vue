<template>
    <v-row justify="center">

        <v-col v-for="(note, index) in notes" :key="index" v-bind="$attrs">


            <v-card class="noteCard" flat height="136px" width="100vw" color="itemBgColor">
                <v-row no-gutters align="center">
                    <v-col cols="auto" order="2">
                        <v-col class="d-flex justify-end pa-2">
                            <nuxt-link :to="`/notes/${note.title}`">
                                <v-icon color="primary" v-text="'la-edit'" large />
                            </nuxt-link>

                        </v-col>
                        <v-col cols="12">
                            <v-icon color="primary" v-text="'la-trash'" @click="$emit('delete', note)" large />

                        </v-col>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title class="title--text" v-text="note.title" />

                        <v-card-subtitle class="text--text" :class="isNotesPath === true ? 'text-truncate' : ''"
                            v-text="note.content" />

                    </v-col>

                </v-row>
            </v-card>



        </v-col>

    </v-row>
</template>

<script>
export default {
    inheritAttrs: false,
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
