<template>
  <div class="index">
    这是面包屑Demo的首页
    <div class="btn">
      <router-link :to="{name: 'index.breadcrumbDemo.first'}">
        <el-button>第一步</el-button>
      </router-link>
      <router-link :to="{name: 'index.breadcrumbDemo.second'}">
        <el-button>第二步</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 20px;

  button {
    margin-right: 20px;
  }
}
</style>
