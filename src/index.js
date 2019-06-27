import KtButton from './components/kt-button.vue'
import boom from './components/boom/index.vue'


const components = [KtButton, boom]

export default function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
