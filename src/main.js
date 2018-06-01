import Vue from 'vue'
import App from './App'
import router from './router'
// import "../static/css/bootstrap.min.css"
import "../static/css/css-table.css"
import "../static/css/index.css"
import "../static/css/page.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import "../node_modules/bootstrap/dist/js/bootstrap"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
