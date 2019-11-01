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
        const data = await this.$_api.getList()
        console.log('list', data)
        this.list = data.map(item => {
          return {
            title: item.title,
            image: 'http://jimrae.top' + item.image
          }
        })
        console.log(this.list)
      } catch (error) {
        console.log(error)
      }
    },
    async postData () {
      try {
        const data = await this.$_api.postData({
          username: 'admin',
          password: 'admin'
        })
        console.log('postData', data)
      } catch (error) {
        console.log(error)
      }
    },
    async postDataByxForm () {
      try {
        const data = await this.$_api.postDataByxForm({
          username: 'admin',
          password: 'admin'
        })
        console.log('postDataByxForm', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss';

.ajax-demo {
  text-align: center;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 400px;
      margin: 20px;

      .title {
        font-size: $g-fs-bs;
        color: $g-color-theme;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
