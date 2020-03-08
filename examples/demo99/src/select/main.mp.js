import Vue from 'vue'
import App from './App.vue'
import {Select, Option, OptionGroup} from 'element-ui';

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.use(Select)
  Vue.use(Option)
  Vue.use(OptionGroup)

  return new Vue({
    el: '#app',
    render: h => h(App)
  })
}
