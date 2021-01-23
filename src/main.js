import Vue from 'vue';
import App from './App.vue';
import DosButton from './components/Button';
import DosDialog from './components/Dialog';
import DosInput from './components/Input';
import DosSwitch from './components/Switch';
import './assets/fonts/font.scss';
import router from './router'

Vue.config.productionTip = false;

Vue.component(DosButton.name, DosButton);
Vue.component(DosDialog.name, DosDialog);
Vue.component(DosInput.name, DosInput);
Vue.component(DosSwitch.name, DosSwitch);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
