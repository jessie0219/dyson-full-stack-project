import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/homePage.vue'
import HairPage from '../views/hairPage.vue'
import LoginPage from '../views/loginPage.vue'
import CartPage from '../views/CartPage.vue'
import AirpurifierPage from '../views/airPurifierPage.vue'
import VacuumCleanerPage from '../views/VacuumCleanerPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hair',
    name: 'hair',
    component: HairPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/airpurifier',
    name: 'Airpurifier',
    component: AirpurifierPage
  },
  {
    path: '/VacuumCleaner',
    name: 'VacuumCleaner',
    component: VacuumCleanerPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
