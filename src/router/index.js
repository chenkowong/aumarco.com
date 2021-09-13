import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '咖啡黑眼圈｜王晨光的个人博客'
    }
  },
  {
    path: '/archives',
    name: 'Archives',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Archives.vue'),
    meta: {
      title: '所有文章'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book'),
    meta: {
      title: '我的书单'
    }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/Timeline')
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import('../views/Album'),
    meta: {
      title: '王博恩的相册'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
    meta: {
      title: '关于博主'
    }
  }
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from ,next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
