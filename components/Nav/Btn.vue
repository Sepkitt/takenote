<template>

    <v-sheet color="transparent" flat v-bind="$attrs" v-on="{
      ...$listeners
    }">
        <v-row dense justify="center" align="center">
            <v-col cols="12" class="d-flex justify-center">

                <v-icon size="30" :color="isActive === 'item--active' ? 'primary' : ''" v-text="icon" />
            </v-col>

            <v-col cols="12">
                <div :class="isActive" class="caption text-center text-uppercase ">{{title}}</div>

            </v-col>
        </v-row>
    </v-sheet>

    <!-- <v-col class="d-flex justify-center">
        </v-col> -->

</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        icon: {
            type: String,
            default: 'la-book-reader'
        },
        title: {
            type: String,
            default: 'place-holder'
        },
        path: {
            type: String,

        }
    },
    computed: {
        isActive() {
            const active = this.path === this.$route.path ? 'item--active' : ''
            return active
        }
    }

}
</script>

<style lang="scss" scoped>

</style>