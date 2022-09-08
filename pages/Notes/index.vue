<template>
    <div>

        <Notes :notes="notes" />

    </div>
</template>

<script>
export default {

    computed: {
        notes() {
            return this.$store.state.notes.notes
        }
    }

}
</script>

<style lang="scss" scoped>
</style>