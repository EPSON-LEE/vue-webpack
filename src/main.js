import Vue from 'vue'
import App from './app.vue'

new Vue({
  data() {
    return {
      text: 123
    }
  },
  el: '#app',
  render: h => h("App"),
  components: {
    App
  }
})
