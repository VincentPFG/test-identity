<script>
export default {
  functional: true,
  render(h, { children }) {
    return h(
      'div',
      children.map((child) => h('v-col', [child]))
    )
  },
}
</script>
