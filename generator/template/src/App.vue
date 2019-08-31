<script>
export default {
  name: 'app',
  render: h => h('div', {
    attrs: {
      id: 'app'
    }
  },
  [h('router-view')])
}
</script>

<style lang="scss">

</style>
