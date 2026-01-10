/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import LayoutLogin from "@/layouts/LayoutLogin.vue"
import  DefaultLayout from "@/layouts/LayoutLogin.vue"

const manualRoutes = [
  {
    path: "/login",
    component: LayoutLogin,
    children: [
      {
        path: "",
        name: "Login",
        component: import("@/pages/login.vue")
      }
    ]
  },
  {
    path: "/home",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: import("@/pages/home.vue")
      }
    ]
  },
  {
    path: "/about",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "about",
        component: import("@/pages/about.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: manualRoutes
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
