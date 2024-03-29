import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import FirebaseView from '../views/FirebaseView.vue'
import SocialauthView from '../views/SocialauthView.vue'
import AWSView from '../views/AWSView.vue'
import AzureView from '../views/AzureView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebaseView
  },
  {
    path: '/social',
    name: 'social',
    component: SocialauthView
  },
  {
    path: '/aws',
    name: 'aws',
    component: AWSView
  },
  {
    path: '/azure',
    name: 'azure',
    component: AzureView,
    meta:{
      requireAuth: true,
      NeedRole: 'admin'
    }
  },

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const auth = false
  const needAuth = to.meta.requireAuth
  const role = 'admina'
  const needRole = to.meta.NeedRole

  if(needAuth && !auth && role == needRole){
    next('login')
  }else{
    next()
  }
})

export default router
