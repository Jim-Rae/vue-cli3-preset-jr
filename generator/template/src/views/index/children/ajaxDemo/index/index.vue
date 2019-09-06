<template>
  <div class="ajax-demo">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        <p class="title">{{item.title}}</p>
        <p><img :src="item.image" alt="image"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ajaxDemo',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
    this.postData()
    this.postDataByxForm()
  },
  methods: {
    add () {
      this.list.push(1)
    },
    del () {
      this.list.pop()
    },
    async getList () {
      try {
        const res = await this.$_api.getList()
        console.log('list', res)
        this.list = res.map(item => {
          return {
            title: item.title,
            image: 'http://jimrae.top:3001' + item.image
          }
        })
        console.log(this.list)
      } catch (error) {
        console.log(error)
      }
    },
    async postData () {
      try {
        const res = await this.$_api.postData({
          username: 'admin',
          password: 'admin'
        })
        console.log('postData', res)
      } catch (error) {
        console.log(error)
      }
    },
    async postDataByxForm () {
      try {
        const res = await this.$_api.postDataByxForm({
          username: 'admin',
          password: 'admin'
        })
        console.log('postDataByxForm', res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index';

.ajax-demo {
  text-align: center;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 400px;
      margin: 20px;

      .title {
        @include g-set-font($g-fs-normal, $g-color-themegreen);
        margin-bottom: 20px;
      }
    }
  }
}
</style>
