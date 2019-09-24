import Distpicker from './index.vue'

export default {
  install (Vue) {
    const VuePicker = Vue.extend(Distpicker)
    const $vm = new VuePicker({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)

    const myPicker = {
      init (title, values, callback) {
        $vm.init(title, values, callback)
      },
      show () {
        $vm.show()
      },
      close () {
        $vm.close()
      }
    }

    Vue.mixin({
      created () {
        this.$_distpicker = myPicker
      }
    })
  }
}
