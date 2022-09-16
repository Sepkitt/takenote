<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-text-field ref="noteTitle" required class="note-title" solo v-model="inputVal.title" placeholder="Title"
          @keydown.enter="focusOnNoteContent" />
      </v-col>

      <v-col cols="12">
        <v-textarea id="noteContent" class="note-content" ref="noteContent" v-model="inputVal.content" required solo
          placeholder="Notes" />
      </v-col>

      <v-col>
        <v-btn color="primary" class="note-saveBtn" @click="$emit('save', value)">
          Save
        </v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

export default {
  props: { value: {} },

  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },

  },

  methods: {
    focusOnNoteContent(event) {
      this.$refs.noteContent.focus()
    },

  }
}

</script>