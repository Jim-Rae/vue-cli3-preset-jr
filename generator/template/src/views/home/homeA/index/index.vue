<template>
  <div class="index">
    这是index
    <div>
      <img :src="imgUrl" width="200">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      imgUrl: null
    }
  },
  async created () {
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
  }
}
</script>

<style lang="scss" scoped>

</style>
