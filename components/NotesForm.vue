<template>
  <v-row justify="center" class="mt-5">
    <h1 class="text-center text-uppercase font-weight-regular ">
      {{$route.path === '/notes/new' ? 'Create Note' : 'Edit Note' }}</h1>

    <v-col cols="12" class="d-flex justify-center align-center">
      <v-card flat color="transparent" :width="maxWidth" class="pa-5">

        <v-form ref="form" v-model="form">

          <v-text-field ref="noteTitle" background-color="itemBgColor" required class="textField" solo
            v-model="inputVal.title" placeholder="Title" @keydown.enter="focusOnNoteContent" />

          <v-textarea class="textField" background-color="itemBgColor" :rows="rows" no-resize id="noteContent"
            ref="noteContent" v-model="inputVal.content" required solo placeholder="Notes" />

          <v-btn :disabled="inputVal.content.length < 1 || inputVal.title.length < 1" color="primary"
            class="note-saveBtn" @click="$emit('save', value)">
            Save
          </v-btn>


        </v-form>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>

export default {
  props: { value: {} },

  data() {
    return {
      form: false,
    }
  },

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
    },
    rows() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '3'
        case 'sm':
          return '4'
        case 'md':
          return '6'
        case 'lg':
          return '7'
        case 'xl':
          return '8'
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


<style>
.textField .v-input__control .v-input__slot {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16) !important;
  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16) inset !important;
}
</style>