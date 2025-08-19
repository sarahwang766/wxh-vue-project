import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/Pinia.vue'),
    }
  ],
})

// let num = 0;
// async function checkAuth() {
//   num++;
//   return new Promise((resolve,reject) => num %2? resolve(true) : reject(new Error("API request failed")));
// }

// const user= {isAdmin: true}
router.beforeEach(async (to, from) => {
  // await checkAuth(); // 这里会 reject
  // return user.isAdmin ? true : '/403';
  console.log(to, from);
});

export default router
