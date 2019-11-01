<template>
  <van-popup
    id="my-distpicker"
    v-model="visible"
    position="bottom"
  >
    <van-picker
      ref="distpicker"
      :columns="columns"
      :show-toolbar="true"
      :visible-item-count=5
      @change="onValuesChange"
      @touchmove.native="$event.preventDefault()"
    >
      <div class="picker-toolbar">
        <van-button plain type="primary" size="small" class="cancel-btn" @click="close">取消</van-button>
        <header class="picker-toolbar-title">{{title}}</header>
        <van-button type="primary" size="small" class="confirm-btn" @click="confirm">确认</van-button>
      </div>
    </van-picker>
  </van-popup>
</template>

<script>
import DISTRICTS from './districts'

const DEFAULT_CODE = 100000

export default {
  name: 'my-distpicker',
  data () {
    return {
      visible: false,
      title: '请选择地区',
      columns: [
        {
          values: []
        },
        {
          values: []
        },
        {
          values: []
        }
      ],
      /* eslint-disable-next-line */
      callback: new Function(),
      province: null,
      city: null,
      district: null
    }
  },
  computed: {
    distpicker () {
      return this.$refs.distpicker
    }
  },
  watch: {
    province (val) {
      let citys = this.getDistricts(this.getAreaCode(val))
      this.distpicker.setColumnValues(1, Object.keys(citys).map(key => citys[key]))
      this.city = this.distpicker.getColumnValues(1)[0]
    },
    city (val) {
      let districts = this.getDistricts(this.getAreaCode(val))
      this.distpicker.setColumnValues(2, Object.keys(districts).map(key => districts[key]))
      this.district = this.distpicker.getColumnValues(2)[0]
    }
  },
  created () {
    let provinces = this.getDistricts()
    this.columns[0].values = Object.keys(provinces).map(key => provinces[key])
  },
  methods: {
    getDistricts (code = DEFAULT_CODE) {
      return DISTRICTS[code] || {}
    },
    getAreaCode (name) {
      for (let x in DISTRICTS) {
        for (let y in DISTRICTS[x]) {
          if (name === DISTRICTS[x][y]) {
            return y
          }
        }
      }
    },
    onValuesChange (picker, values) {
      this.province = values[0]
      this.city = values[1]
      this.district = values[2]
    },
    confirm () {
      this.visible = false
      this.callback({
        province: this.province,
        city: this.city,
        district: this.district
      })
    },
    init (title, callback) {
      this.title = title
      this.callback = callback
    },
    show () {
      this.visible = true
      this.$nextTick(() => {
        this.province = this.columns[0].values[0]
      })
    },
    close () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss';

#my-distpicker{

  .picker{
    width:100vw;
  }

  .picker-item{
    font-size: 30px;
    color: $g-fs-bs;
  }

  .picker-selected {
    color: $g-fs-lg;
  }

  .picker-toolbar{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-content: center;

    &-title{
      font-size: 34px;
      color: $g-fs-lg;
      max-width: 350px;
      height: 80px;
      line-height: 80px;
    }

    .cancel-btn{
      margin: auto 30px;
    }

    .confirm-btn{
      margin: auto 30px;
    }
  }
}
</style>
