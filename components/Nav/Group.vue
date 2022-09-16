<template>
    <v-card class="mx-auto" color="transparent" flat>
        <v-row>
            <v-col class="pa-5" v-for="nav in navigation" :key="nav.index">
                <NavBtn :title="nav.title" :icon="nav.icon" @click="!nav.path ? nav.click(nav) : dynamicCLick(nav)"
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
        navigation() {
            let icon = !this.isDark ? 'la-moon' : 'la-sun'
            let name = !this.isDark ? 'Dark' : 'Light'
            const nav = [
                { title: "Home", icon: "la-home", path: '/' },
                { title: "Notes", icon: "la-newspaper", path: '/notes' },
                { title: "Prev", icon: "la-angle-left", click: this.emitNoteClick },
                { title: "Next", icon: "la-angle-right", click: this.emitNoteClick },
                { title: "New", icon: "la-notes-medical", path: '/notes/new' },
                { title: name, icon: icon, click: this.toggleTheme }
            ];
            const nav2 = [
                { title: "Home", icon: "la-home", path: '/' },
                { title: "Notes", icon: "la-newspaper", path: '/notes' },
                { title: "New", icon: "la-notes-medical", path: '/notes/new' },
                { title: name, icon: icon, click: this.toggleTheme }
            ];

            if (this.$route.path === '/notes') {
                return nav
            } else if (this.notes.length < 7) {
                console.log(this.notes.length)
                return nav2

            }
            else {
                return nav2
                // let removeBtns = [
                //     { title: "Prev", icon: "la-angle-right", click: this.emitNoteClick },
                //     { title: "Next", icon: "la-angle-right", click: this.emitNoteClick }
                // ]
                //remove prev and next from nav array
                // let filteredNotes = _.without(nav, ...removeBtns)
                // console.log(filteredNotes)
                // let filteredNav = nav.filter(e => !removeBtns.includes(e))
                // console.log('Home', filteredNav)


            }



            // return nav;
        }
    },
    methods: {
        emitNoteClick(nav) {
            console.log({ nav })
            nav.title === 'Next' ? this.$emit('nextNote') : this.$emit('prevNote')

        },


        dynamicCLick(nav) {
            // write a function that will dynamically attach the $router.push(nav.path)
            // to the navigation computed property

            // dummy function
            this.$router.push(nav.path)
            // this.navigation.forEach((nav) => {
            //     console.log(nav)
            //     // this.$router.push(nav.path)
            // })

        },
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            // Subscribe to store updates

            this.$store.subscribe((mutation, state) => {
                console.log({ mutation })
                console.log({ state })
                localStorage.setItem('store', JSON.stringify(state));


            })
            this.$store.commit('app/SET_USE_DARK_MODE', this.isDark)

        }
    },

}
</script>

<style lang="scss" scoped>

</style>