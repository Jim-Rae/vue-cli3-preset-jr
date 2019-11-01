<template>
  <div class="index">
    <img class="logo" src="@/assets/img/logo.png" alt="logo.png">
    <p class="title">基于vue的移动端项目模版</p>
    <p class="author">designed by JimRae</p>
    <router-link :to="{name: 'demo'}">
      <van-button type="primary" class="button">查看demo</van-button>
    </router-link>
    <p class="link"><a href="https://github.com/Jim-Rae/vue-cli3-preset-jr">https://github.com/Jim-Rae/vue-cli3-preset-jr</a></p>
    <footer class="copyright">
      Copyright © JimRae. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss';

.index {
  text-align: center;
  padding-top: 200px;

  .logo {
    width: 400px;
    height: 400px;
    margin-bottom: 30px;
  }

  .title {
    font-size: $g-fs-xl;
    color: $g-color-theme;
    margin-bottom: 20px;
  }

  .author {
    font-size: $g-fs-md;
    color: $g-color-font--normal;
  }

  .button {
    margin: 60px auto;
  }

  .link {
    font-size: $g-fs-bs;
    text-decoration: underline;
  }

  .copyright {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: $g-fs-xs;
    color: $g-color-font--normal;
    margin: auto;
    padding: 19px;
    line-height: 30px;
  }
}
</style>
