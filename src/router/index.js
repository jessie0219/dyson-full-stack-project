import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/homePage.vue'
import Products from '../views/productsPage.vue'
import Login from '../views/loginPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
