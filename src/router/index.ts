import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import TemplateDetail from '../views/TemplateDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      { path: '', name: 'home', component: Home, meta: { title: '欢迎来到沃德网站' }},
      { path: 'template/:id', name: 'template', component: TemplateDetail, meta: { title: '海报详情' }},
    ]
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import(/* webpackChunkName: "editor" */ '../views/Editor.vue'),
    meta: { requiredLogin: true, title: '编辑我的设计' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
