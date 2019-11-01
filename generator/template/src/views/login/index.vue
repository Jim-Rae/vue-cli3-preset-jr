<template>
  <div class="login">
    <transition name="form-fade" mode="in-out">
      <section
        class="form-contianer"
        v-show="showLogin"
        v-loading="loading"
      >
        <div class="platform-title">
          <p>登录</p>
        </div>
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          @submit.native.prevent
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="密码"
              v-model="loginForm.password"
              autocomplete="on"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm"
              class="submit-btn"
              native-type="submit">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      showLogin: false,
      loading: false
    }
  },
  mounted () {
    this.showLogin = true
  },
  methods: {
    async login () {
      try {
        this.loading = true
        await this.$_api.login({
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        this.loading = false
        this.$message.success('登录成功')
        this.$router.push({ name: 'index.breadcrumbDemo.index' })
      } catch (error) {
        this.loading = false
        if (error.message) {
          this.$message.error(error.message)
        }
        console.error(error)
      }
    },
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.login()
        } else {
          console.log('表单校验错误')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss';

.login{
  width: 100%;
  height: 100vh;
  background-color: $g-color-theme;

  .form-contianer{
    @include g-layout-center-margin(350px, 220px, 'both');
    width: 350px;
    height: 220px;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;

    .submit-btn{
      width: 100%;
      font-size: 16px;
    }

    .register-link {
      color: $g-color-theme;

      &:hover {
        text-decoration: underline;
      }
    }

    .forget-link {
      margin-left: 30px;
      color: #E6A23C;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.platform-title{
  position: absolute;
  width: 100%;
  top: -80px;
  left: 0;
  p{
    font-size: 34px;
    color: #fff;
  }
}

.tip{
  font-size: 12px;
  color: red;
}
.form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
}
.form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
}
</style>
