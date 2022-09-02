<template>
    <div>
        <h3>Todo Title</h3>

        <div class="col">
            <input v-model="newTodo" @keyup.enter="$emit('enter')" type="text" placeholder="Add Todo" />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>