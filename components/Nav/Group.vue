<template>
    <v-card class="mx-auto" color="transparent" flat>
        <v-row>
            <v-col class="pa-5" v-for="nav in navigation" :key="nav.index">
                <NavBtn :title="nav.title" :icon="nav.icon" @click="!nav.path ? nav.click(nav) : navigate(nav)"
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
                { title: "Home", icon: "la-home", path: '/' , visible: true},
                { title: "Notes", icon: "la-newspaper", path: '/notes' , visible: true},
                { title: "Prev", icon: "la-angle-left", click: this.emitNoteClick , visible: true},
                { title: "Next", icon: "la-angle-right", click: this.emitNoteClick , visible: true},
                { title: "New", icon: "la-notes-medical", path: '/notes/new', visible: true },
                { title: name, icon: icon, click: this.toggleTheme , visible: true}
            ];

            return nav



            // return nav;
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