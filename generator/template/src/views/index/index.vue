<template>
  <div class="index">
    <el-container style="height: 100vh">
      <el-header height="60px">
        <img class="logo" src="@/assets/img/logo.png" alt="logo">
        <span class="title">基于vue-cli3的前端项目模板</span>
        <router-link
          v-if="!username"
          class="login-btn"
          :to="{name: 'login'}"
        >
          登录
        </router-link>
        <div
          v-else
          class="user-wrapper"
        >
          <span class="user-info">{{username}}</span>
          <span
            class="logout-btn"
            @click="logout"
          >
            退出登录
          </span>
        </div>
      </el-header>
      <el-container class="container">
        <el-aside width="250px">
          <el-menu
            default-active="2"
            class="menu"
            router
          >
            <el-submenu index="/index/breadcrumbDemo">
              <template slot="title">
                <i class="el-icon-grape"></i>
                <span>面包屑Demo</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/index/breadcrumbDemo/first">第一个页面</el-menu-item>
                <el-menu-item index="/index/breadcrumbDemo/second">第二个页面</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/index/scrollDemo/index">
              <i class="el-icon-orange"></i>
              <span slot="title">自定义滚动条Demo</span>
            </el-menu-item>
            <el-menu-item index="/index/ajaxDemo/index">
              <i class="el-icon-cherry"></i>
              <span slot="title">异步数据请求Demo</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <breadcrumb/>
          <awesome-scrollbar-box>
            <router-view class="view"/>
          </awesome-scrollbar-box>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'index',
  computed: {
    ...mapGetters({
      username: 'user/username'
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var';
@import '@/assets/scss/mixin/layout';

.el-header {
  position: fixed !important;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: solid 1px $g-color-gray-line;
  line-height: 60px;

  @include g-layout-inline-block-vcenter('.logo');

  .logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .title {
    @include g-set-font( $g-fs-strong, $g-color-themegreen);
  }

  .login-btn {
    @include g-set-font($g-fs-strong, $g-color-black);
    display: block;
    height: 60px;
    right: 40px;
    @include g-layout-center-transform('y');

    &:hover {
      color: $g-color-themegreen;
    }
  }

  .user-wrapper {
    display: block;
    height: 60px;
    right: 40px;
    @include g-layout-center-transform('y');

    .user-info {
      @include g-set-font($g-fs-strong, $g-color-themegreen);
      margin-right: 20px;
    }

    .logout-btn {
      @include g-set-font($g-fs-strong, $g-color-black);

      &:hover {
        color: $g-color-themegreen;
        cursor: pointer;
      }
    }
  }
}

.el-aside {
  position: fixed;
  z-index: 999;
  top: 80px;
  left: 0;
  bottom: 20px;

  .menu {
    height: 100%;
  }
}

.container {
  height: 100%;
  padding-top: 60px;

  .el-main {
    padding: 0 0 0 250px;
    overflow: hidden;
    color: $g-color-black;
    height: 100%;
    display: flex;
    flex-direction: column;

    .view {
      padding: 20px;
    }
  }
}
</style>
