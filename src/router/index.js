import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bill from '@/components/pages/bill_sum_list'
import billdetail from '@/components/pages/bill_detail_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/bill'
    },
    {
      path:'/bill',
      name:'bill',
      component:bill
    },
    {
      path:'/bill/detail',
      name:'billdetail',
      component:billdetail
    }
  ]
})
