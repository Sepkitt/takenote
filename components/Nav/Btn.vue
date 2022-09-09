<template>
    <v-sheet flat v-bind="$attrs" v-on="{
      ...$listeners
    }">
        <v-row dense justify="center" align="center">
            <v-col cols="12" class="d-flex justify-center">

                <v-icon x-large v-text="icon" />
            </v-col>

            <v-col cols="12">
                <div class="text-center text--upper">{{title}}</div>

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
        }
    }

}
</script>

<style lang="scss" scoped>

</style>