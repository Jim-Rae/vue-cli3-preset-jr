<template>
  <div class="index">
    这是index
    <div>
      <img :src="imgUrl" width="200">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      imgUrl: null
    }
  },
  async created () {
    await this.$_api.login({
      username: 'admin',
      password: 'admin'
    })
    console.log('userInfo', await this.getUserInfo())

    <%_ if (options.element) { _%>
    this.$alert('这是一段内容', '标题名称', {
      confirmButtonText: '确定',
      callback: action => {
        this.$message({
          type: 'info',
          message: `action: ${action}`
        })
      }
    })
    <%_ } _%>

    try {
      const res1 = await this.$_api.postData({
        username: 'admin',
        password: 'admin'
      })
      console.log('res1', res1)
      const res2 = await this.$_api.postData2({
        username: 'admin',
        password: 'admin'
      })
      console.log('res2', res2)
      const res3 = await this.$_api.getList()
      console.log('res3', res3)
      const baseUrl = 'http://jimrae.top:3001'
      this.imgUrl = baseUrl + res3[0].image
    } catch (error) {
      console.log(error)
    }

    this.getRouteAndRouter()
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
