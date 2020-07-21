<template>
  <v-btn v-bind="attrs" class="snipcart-add-item">
    <slot />
  </v-btn>
</template>

<script>
const { entries, fromEntries } = Object

export default {
  computed: {
    attrs() {
      return fromEntries(
        entries(this.$attrs).map(([k, v]) => ['data-item-' + k, v])
      )
    },
  },
}
</script>
