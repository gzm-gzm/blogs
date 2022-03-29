
// 模块启动入口
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import './assets/css/index.css'

export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data(){
      return{
        GRIDSOME_API_URL:process.env.GRIDSOME_API_URL //这样写的话 在模板可以直接拿到图片 在任何（.vue文件）地方都可以直接调用   这样即可GRIDSOME_API_URL
      }
    }
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout) //注册全局组件
}
