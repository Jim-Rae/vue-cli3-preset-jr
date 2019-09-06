<template>
  <div class="second">
    这是第二步
    <div class="btn">
      <router-link :to="{name: 'index.breadcrumbDemo.first'}">
        <el-button>第一步</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'second'
}
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 20px;
}
</style>
