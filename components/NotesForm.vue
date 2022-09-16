<template>
  <v-card color="itemBgColor" :maxWidth="maxWidth" class="pa-5">

    <v-row justy="center" align="center">
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
  </v-card>
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
    maxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '100%'
        case 'sm':
          return '90%'
        case 'md':
          return '80%'
        case 'lg':
          return '70%'
        case 'xl':
          return '50%'
      }
    }

  },

  methods: {
    focusOnNoteContent(event) {
      this.$refs.noteContent.focus()
    },

  }
}

</script>