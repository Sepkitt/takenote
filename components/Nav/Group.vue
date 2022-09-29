<template>
    <v-card class="mx-auto" color="transparent" flat>
        <v-row dense no-gutters>
            <v-col  v-for="nav in navigation" :key="nav.index">

                <NavBtn v-if="nav.visible" :title="nav.title" :icon="nav.icon" @click="!nav.path ? nav.click(nav) : navigate(nav)"
                    :to="nav.path" :path="nav.path" />
            </v-col>
        </v-row>

    </v-card>
</template>

<script>
export default {
    computed: {
        isDark() {
            return this.$vuetify.theme.isDark;
        },
        notes() {
            return this.$store.state.notes.notes;
        },
        last() {
            let last_element = this.noteGroup.length - 1;
            return last_element
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


        navigation() {
            let icon = !this.isDark ? 'la-moon' : 'la-sun'
            let name = !this.isDark ? 'Dark' : 'Light'
            const nav = [
                { title: "Home", icon: "la-home", path: '/', visible: true },
                { title: "Notes", icon: "la-newspaper", path: '/notes', visible: true },
                { title: "Prev", icon: "la-angle-left", click: this.emitNoteClick, visible: false },
                { title: "Next", icon: "la-angle-right", click: this.emitNoteClick, visible: false },
                { title: "New", icon: "la-notes-medical", path: '/notes/new', visible: true },
                { title: name, icon: icon, click: this.toggleTheme, visible: true }
            ];

            //remove item from array when visibility is set to false

            const checkVisibility = nav.filter(n => {

                // Hide Next btn and Prev btn when $route is not /notes

                if (this.$route.path !== '/notes') {
                    n.title === 'Next' || n.title === 'Prev'
                        ? n.visible = false : n.visible = true

                }

                // Hide Next and Prev when Notes are less than 7
                else if (this.$route.path === '/notes') {
                    const model = this.$store.state.notes.noteGroupModel

                    const notes = this.$store.state.notes.notes
                    // Select Next and Prev from array
                    if (n.title === 'Next' || n.title === 'Prev') {
                        notes < 7 ? n.visible = false : true

                        if (n.title === 'Prev') {
                            // Hide Prev btn when on first page
                            model === 0 ? n.visible = false : n.visible = true
                        }


                    }


                    // Hide Next btn when at the end of notes-page
                    if (n.title === 'Next') {
                        model === 2 ? n.visible = false : n.visible = true
                        // this.last

                        // 6 items = 1 array


                    }




                }



                return n.visible

            })
            return checkVisibility


        }
    },
    methods: {
        emitNoteClick(nav) {
            nav.title === 'Next' ? this.$emit('nextNote') : this.$emit('prevNote')

        },


        navigate(nav) {
            this.$router.push(nav.path)


        },
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            // Subscribe to store updates

            this.$store.subscribe((mutation, state) => {
          
                localStorage.setItem('store', JSON.stringify(state));


            })
            this.$store.commit('app/SET_USE_DARK_MODE', this.isDark)

        }
    },

}
</script>

<style lang="scss" scoped>

</style>