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
         
        />
      </v-col>

      <v-col>
        <v-btn color="primary">
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
      }
    }
}

</script>