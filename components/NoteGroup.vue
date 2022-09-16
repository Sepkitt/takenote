<template>
    <div>
        <!-- <v-row align="center" justify="center" v-if="!$vuetify.breakpoint.xs ">
            <v-btn @click="model--" :disabled="model === 0">
                <v-icon>la-angle-left</v-icon>
            </v-btn>

            <v-btn @click="model++" :disabled="model === last">
                <v-icon>la-angle-right</v-icon>
            </v-btn>
        </v-row> -->

        <v-row align="center" justify="center" dense>

            <v-col cols="8">
                <v-window v-model="model" hide-delimiters :show-arrows="false" :continuous="false" height="100%">
                    <v-window-item v-for="(page, pageIndex) in menuGroups.length" :key="pageIndex">

                        <Notes :notes="menuGroups[pageIndex]" />

                    </v-window-item>
                </v-window>
            </v-col>


        </v-row>


    </div>
</template>
  
<script>
export default {
    name: 'NoteGroup',
    props: ['value'],
    data() {
        return {
            // model: 0,
        };
    },
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
        isNotesPath() {
            return this.$route.path === "/notes" ? true : false;
        },
        last() {
            let last_element = this.menuGroups.length - 1;
            return last_element;
        },
        menuGroups() {
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
        width() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return "100%"; //  < 600px
                case "sm":
                    return "100%"; //  600px > < 960px
                case "md":
                    return "100%"; //  960px > < 1264*
                case "lg":
                    return "100%"; //1264 > < 1904px*
                case "xl":
                    return "1080px"; //> 1904px*
            }
        }
    },
}
</script>
  