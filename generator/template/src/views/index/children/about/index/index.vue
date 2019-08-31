<template>
  <div class="about">
    这是about
    <div>
      <img :src="imgUrl" width="200">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      imgUrl: null
    }
  },
  created () {
    this.getList()
    this.postData()
    this.postDataByxForm()
  },
  methods: {
    async getList () {
      try {
        const res = await this.$_api.getList()
        console.log('list', res)
        this.imgUrl = 'http://jimrae.top:3001' + res[0].image
      } catch (error) {
        console.log(error)
      }
    },
    async postData () {
      try {
        const res = await this.$_api.postData({
          username: 'admin',
          password: 'admin'
        })
        console.log('postData', res)
      } catch (error) {
        console.log(error)
      }
    },
    async postDataByxForm () {
      try {
        const res = await this.$_api.postDataByxForm({
          username: 'admin',
          password: 'admin'
        })
        console.log('postDataByxForm', res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
