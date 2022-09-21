<template>
    <div class="todo-form">
        <h1>List Todos</h1>

        


        <div class="container">
            <div class="row">

            <div>Tasks {{todosCount}} </div>
              

                <div class="col">
                    <ul v-for="(todo, index) in todos" :key="index">

                  
                        <li>
                            <span>{{todo.name}}</span>
                            <button @click="deleteTodo(index)">X</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
    name: 'todoList',
    data() {
        return {
            newTodo: '',
          todos: [
       
          ],
          swearWords: [
              'butt face',
              'willy',
              'hairy toe'
          ]
        }
    },
    computed: {
        todosCount() {
            return this.todos.length
        }
    },

    methods: {
     
        deleteTodo(index) {
            this.todos.splice(index, 1)
        }
    },
    watch: {
        newTodo(newValue) {
            if(this.swearWords.includes(newValue.toLowerCase())) {
                this.newTodo = ''
                alert(`You must NEVER say ${newValue} `)
            }
        }
    }
}
</script>
