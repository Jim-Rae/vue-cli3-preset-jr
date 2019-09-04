<template>
  <awesome-scrollbar-box class="about">
    这是about
    <el-button type="success" @click="add">添加</el-button>
    <el-button type="danger" @click="del">删除</el-button>
    <div
      v-for="(item, index) in list"
      :key="index"
    >
      <img :src="imgUrl" width="200">
    </div>
  </awesome-scrollbar-box>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      imgUrl: null,
      list: [1,2,3]
    }
  },
  created () {
    this.getList()
    this.postData()
    this.postDataByxForm()
  },
  methods: {
    add () {
      this.list.push(1)
    },
    del () {
      this.list.pop()
    },
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
.about {
  height: 100%;
}
</style>
