<template>
  <v-btn icon @click="turnDark">
    <v-icon>mdi-theme-light-dark</v-icon>
  </v-btn>
</template>

<script>
export default {
  mounted() {
    this.$vuetify.theme.dark = localStorage.dark
      ? JSON.parse(localStorage.dark)
      : matchMedia('(prefers-color-scheme: dark)').matches
  },
  methods: {
    turnDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.dark = this.$vuetify.theme.dark
    },
  },
}
</script>
