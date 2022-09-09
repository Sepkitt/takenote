<template>
    <v-card class="mx-auto">
        <v-row>
            <v-col v-for="nav in navigation" :key="nav.index">
                <Btn :title="nav.title" :icon="nav.icon" @click="!nav.path ? nav.click() : dynamicCLick(nav)"
                    :to="nav.path" />
            </v-col>
        </v-row>

        <!-- 
        <nuxt-link to="/">
            <v-sheet>
                <v-icon v-text="'la-home'" />
            </v-sheet>
        </nuxt-link> -->
        <!-- <nuxt-link to="/notes">Tasks</nuxt-link>
        <router-link to="/notes/new">New</router-link>


        <v-btn icon @click="toggleTheme">
            <v-icon v-text="!isDark ? 'la-moon' : 'la-sun'"></v-icon>
        </v-btn> -->

    </v-card>
</template>

<script>
import Btn from './Btn.vue';
export default {
    computed: {
        isDark() {
            return this.$vuetify.theme.isDark;
        },
        navigation() {
            let icon = !this.isDark ? 'la-moon' : 'la-sun'
            let name = !this.isDark ? 'Dark' : 'Light'
            const nav = [
                { title: "Home", icon: "la-home", path: '/' },
                { title: "Notes", icon: "la-home", path: '/notes' },
                { title: "New", icon: "la-home", path: '/notes/new' },
                { title: name, icon: icon, click: this.toggleTheme }
            ];
            return nav;
        }
    },
    methods: {
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
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString());
        }
    },
    mounted() {
        const theme = localStorage.getItem("useDarkTheme");
        if (theme) {
            if (theme == "true") {
                this.$vuetify.theme.dark = true;
            }
            else
                this.$vuetify.theme.dark = false;
        }
    },
    components: { Btn }
}
</script>

<style lang="scss" scoped>

</style>