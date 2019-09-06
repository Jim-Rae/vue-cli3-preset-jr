<template>
  <div class="first">
    这是第一步
    <div class="btn">
      <router-link :to="{name: 'index.breadcrumbDemo.second'}">
        <el-button>第二步</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'first',
  data () {
    return {

    }
  },
  created () {
    this.getRouteInfo()
  },
  methods: {
    ...mapActions({
      getRouteInfo: 'user/getRouteInfo'
    })
  }
}
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 20px;
}
</style>
