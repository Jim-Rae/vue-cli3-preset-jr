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
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <breadcrumb/>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RouteConfig from '@/router'

export default {
  name: 'index',
  computed: {
    ...mapGetters({
      username: 'user/username'
    })
  },
  created () {
    console.log(RouteConfig.options.routes)
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/var';
@import '@/assets/css/mixin/layout';

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

  @include g-layout-center-transform('.login-btn', 'y');
  .login-btn {
    @include g-set-font($g-fs-strong, $g-color-black);
    display: block;
    height: 60px;
    right: 40px;

    &:hover {
      color: $g-color-themegreen;
    }
  }

  @include g-layout-center-transform('.user-wrapper', 'y');
  .user-wrapper {
    display: block;
    height: 60px;
    right: 40px;

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

  .el-main {
    padding: 60px 0 0 250px;
    overflow: hidden;
    color: $g-color-black;
    text-align: center;
    line-height: 160px;
  }
}
</style>
