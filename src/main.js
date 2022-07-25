import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUserSecret,
  faUser,
  faCircleExclamation,
  faSave,
  faCalendar,
  faPen,
  faTrash,
  faPlus,
  faHome,
  faArrowLeft,
  faXmark,
  faBan,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import VueTheMask from 'vue-the-mask'
library.add(faUserSecret,
  faUser,
  faCircleExclamation,
  faSave,
  faCalendar,
  faPen,
  faTrash,
  faPlus,
  faHome,
  faArrowLeft,
  faXmark,
  faBan,
  faCheck
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueTheMask)

Vue.filter('formatPhone', function (phone) {
  if (!phone) return ''
  phone = phone.replace(/\D/g, '')
  phone = phone.replace(/(\d{0})(\d)/, '$1($2')
  phone = phone.replace(/(\d{2})(\d)/, '$1) $2')
  phone = phone.replace(/(\d{5})(\d)/, '$1-$2')
  return phone
})

Vue.filter('formatCpf', function (cpf) {
  if (!cpf) return ''
  cpf = cpf.replace(/\D/g, '')
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  return cpf
})

Vue.filter('formatDate', function (data) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(`${data} 00:00`))
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
