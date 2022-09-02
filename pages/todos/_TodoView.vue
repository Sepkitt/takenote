<template>
    <div>
    <!-- Dynamic route that shows the selected todo-list -->
    <div>{{ $route.params.title }}</div>

    <!-- Todo-form -->
    <TodoForm @enter="addTodo"/>

    <!-- List todos -->

    <Todos/>


    </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';
    export default {
    components: { TodoForm },

    methods: {

        addTodo() {
            let addTodo = {
                id:Date.now(),
                name: this.newTodo
            }
            this.todos.push(addTodo)
            this.newTodo = ''

        },

    }
}
</script>

<style  scoped>

</style>