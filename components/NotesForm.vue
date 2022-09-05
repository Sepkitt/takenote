<template>
  <v-container fluid >
    <v-row>
        
        <v-col cols="12">
            
            <v-text-field 
                solo 
                v-model="title" 
                placeholder="Title"
                @keyup.enter="focusOnNoteContent" />
        
        </v-col>
   
      <v-col
        cols="12"
       
      >
        <v-textarea
            id="noteContent"
            ref="noteContent"
            v-model="content"
          solo
          name="input-7-4"
          placeholder="Notes"
          @keyup.enter="saveNotes"
         
        />
      </v-col>

      <v-col>
        <v-btn @click="saveNotes">
            Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {

    data() {
        return {
           
            title: '',
            content: ''
            
        }
    },

    methods: {
      focusOnNoteContent (event) {
        console.log(this.$refs)
        this.$refs.noteContent.focus()
        // document.getElementById('notes').focus();
      },
      saveNotes() {
        // save note and navigate to the All notes page
        let noteId = _.uniqueId(); 
        
        // Printing the output  
        let newNote = {
            id: noteId,
            title: this.title,
            content: this.content

        }
        this.$store.commit('notes/addNote', newNote)

        this.$nextTick(() => {
          this.$router.push('/notes')
        })


        // this.todos.push(addTodo)
        //     this.newTodo = ''


      },
      // deleteTodo(index) {
      //       this.todos.splice(index, 1)
      //   }
    }
}

</script>