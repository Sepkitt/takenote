<template>
    <div>
        All notes

        <v-row justify="center">
            <v-col v-for="note in notes" :key="note.id">
              <nuxt-link :to="`/notes/${note.title}`">
              
                <v-card  height="250px" width="150px">
                    <v-row>
                        <v-col>
                            <v-card-title>
                                {{note.title}}
                            </v-card-title>
                        </v-col>
                    
                    </v-row>
                
                
                </v-card>
              
              </nuxt-link>
            </v-col>

        </v-row>

    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array
        }
    },
    computed: {
      
    },
}
</script>

<style lang="scss" scoped>
</style>