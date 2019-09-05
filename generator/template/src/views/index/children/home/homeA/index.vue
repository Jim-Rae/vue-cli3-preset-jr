<template>
  <div class="homeA">
    这是homeA
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'index',
  data () {
    return {

    }
  },
  async created () {
    await this.$_api.login({
      username: 'admin',
      password: 'admin'
    })

    this.getRouteAndRouter()

    this.$alert('这是一段内容', '标题名称', {
      confirmButtonText: '确定',
      callback: action => {
        this.$message({
          type: 'info',
          message: `action: ${action}`
        })
      }
    })
  },
  methods: {
    ...mapActions({
      getUserInfo: 'user/getUserInfo',
      getRouteAndRouter: 'user/getRouteAndRouter'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
