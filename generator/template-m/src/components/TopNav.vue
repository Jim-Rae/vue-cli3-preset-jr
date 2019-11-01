<!--
  用法：
    <TopNav class="home-nav" title="首页">
      // 添加导航栏左图标，若不加默认为返回键
      <template slot="left">
        <div></div>
      </template>
      // 添加导航栏右图标
      <template slot="right">
        <div class="home-nav-user" @click="clickInfo">
          <div class="home-nav-user-name">\</div>
          <div class="home-nav-user-icon bg-user"></div>
        </div>
      </template>
    </TopNav>
-->

<template>
  <div class="top-nav">
    {{title}}
    <div class="top-nav-left">
      <slot name="left">
        <div class="top-nav-left-wrapper" @click="clickBack">
          <img v-if="history > 1" src="@/assets/img/icon_back.png" alt="icon_back.png">
        </div>
      </slot>
    </div>
    <div class="top-nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    title: {
      type: String,
      required: true
    },
    backUrl: {
      type: String
    }
  },
  data () {
    return {
      history: history.length
    }
  },
  methods: {
    clickBack () {
      if (this.backUrl) {
        this.$router.replace(this.backUrl)
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss';

.top-nav {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: $g-header-height;
  font-size: $g-fs-md;
  color: white;
  text-align: center;
  line-height: $g-header-height;
  background-color: $g-color-theme;
  left: 0;
  top: 0;

  &-left {
    position: absolute;
    width: 40%;
    height: 100%;
    left: 0;
    top: 0;

    &-wrapper {
      width: 100px;
      height: 100%;
      @include g-layout-center-transform('y');
      @include g-layout-flex(center, center);

      img {
        width: 48px;
      }
    }
  }

  &-right {
    position: absolute;
    width: 40%;
    height: 100%;
    right: 0;
    top: 0;
    @include g-layout-flex(flex-end);
  }
}
</style>
