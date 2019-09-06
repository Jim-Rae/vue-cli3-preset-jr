<template>
  <div class="scroll-demo">
    <el-button type="success" @click="add">添加</el-button>
    <el-button type="danger" @click="del">删除</el-button>
    <div
      v-for="(item, index) in list"
      :key="index"
    >
      <img src="@/assets/img/logo.png" width="200">
    </div>
  </div>
</template>

<script>
export default {
  name: 'scrollDemo',
  data () {
    return {
      list: [1, 1, 1, 1, 1]
    }
  },
  methods: {
    add () {
      this.list.push(1)
    },
    del () {
      this.list.pop()
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-demo {
  text-align: center;
  line-height: 100px;
}
</style>
