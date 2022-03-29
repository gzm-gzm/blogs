const c1 = () => import(/* webpackChunkName: "page--src-pages-user-id-vue" */ "F:\\lagouxuexi\\part3\\fed-e-task-01-04\\gridsome\\my-gridsome-blog-xiangmu\\src\\pages\\user\\[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "F:\\lagouxuexi\\part3\\fed-e-task-01-04\\gridsome\\my-gridsome-blog-xiangmu\\src\\templates\\Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "F:\\lagouxuexi\\part3\\fed-e-task-01-04\\gridsome\\my-gridsome-blog-xiangmu\\src\\templates\\Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "F:\\lagouxuexi\\part3\\fed-e-task-01-04\\gridsome\\my-gridsome-blog-xiangmu\\src\\templates\\MyPage.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "F:\\lagouxuexi\\part3\\fed-e-task-01-04\\gridsome\\my-gridsome-blog-xiangmu\\src\\pages\\contact.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "F:\\lagouxuexi\\part3\\fed-e-task-01-04\\gridsome\\my-gridsome-blog-xiangmu\\src\\pages\\About.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "F:\\lagouxuexi\\part3\\fed-e-task-01-04\\gridsome\\my-gridsome-blog-xiangmu\\src\\pages\\404.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "F:\\lagouxuexi\\part3\\fed-e-task-01-04\\gridsome\\my-gridsome-blog-xiangmu\\src\\pages\\Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/tag/:id/",
    component: c2
  },
  {
    path: "/post/:id/",
    component: c3
  },
  {
    path: "/my-page/",
    component: c4
  },
  {
    path: "/contact/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
