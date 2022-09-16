<template>

    <div>
        <NoteGroup v-model="model" />
      

    </div>

</template>

<script>
export default {
    data() {
        return {
            model: 0
        }
    },
    computed: {

        notes() {
            return this.$store.state.notes.notes;
        }
    },

    methods: {
        nextNote() {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>