import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app2',
    render: h => h(App),
    router,
  },
})

export const bootstrap = [
  vueLifecycles.bootstrap
]

export function mount (props) {
  createDomElement()
  return vueLifecycles.mount(props)
}

export const unmount = [
  vueLifecycles.unmount
]

function createDomElement () {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app2')

  if (!el) {
    el = document.createElement('div')
    el.id = 'app2'
    document.body.appendChild(el)
  }
  return el
}
