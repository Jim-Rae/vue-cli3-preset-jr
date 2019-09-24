<template>
  <div class="ajax-demo">
    <TopNav title="ajaxDemo"/>
    <ul>
      <li
      v-for="(item, index) in list"
      :key="index"
      class="item">
        <img :src="item.image">
        <p>{{item.title}}</p>
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
  },
  methods: {
    async getList () {
      try {
        const res = await this.$_api.getList()
        this.list = res.map((item) => {
          return {
            title: item.title,
            image: 'http://jimrae.top:3001' + item.image
          }
        })
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
  padding-top: 84px;

  .item {
    width: 100%;
    margin-bottom: 40px;

    img {
      width: 100%;
    }

    p {
      font-size: 28px;
      color: $g-color-themegreen;
    }
  }
}

</style>
