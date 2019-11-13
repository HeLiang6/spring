import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "./home";
import list from "./list";
import mine from "./mine";
import order from "./order";
import telme from "./telme";
export default new Router({
    routes:[
      home,
      list,
      mine,
      order,
      telme  
    ]
})
