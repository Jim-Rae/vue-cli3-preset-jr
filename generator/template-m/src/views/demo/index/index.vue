<template>
  <div class="demo">
    <TopNav title="Demo"/>
    <ul>
      <router-link
      tag="li"
      :to="{name: 'ajaxDemo'}">
        ajaxDemo
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </router-link>
      <li @click="$_distpicker.show()">
        pickerDemo
        <img src="@/assets/img/icon_go.png" alt="icon_go.png">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo',
  created () {
    this.$_distpicker.init('请选择地区', value => {
      this.$toast(`你选择了${value.province}${value.city}${value.district}`)
      console.log(`你选择了${value.province}${value.city}${value.district}`)
    })
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/scss/index';

.demo {
  padding-top: 84px;

  ul {

    li {
      position: relative;
      font-size: $g-fs-bs;
      color: $g-color-font--normal;
      padding: 30px;
      border-bottom: 1px solid $g-color-border;

      img {
        @include g-layout-center-transform('y');
        right: 20px;
        width: 60px;
      }
    }
  }
}
</style>
