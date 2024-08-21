import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/Pages/HomeView.vue";
import PortfolioView from "@/views/Pages/PortfolioView.vue";
import ContactView from "@/views/Pages/ContactView.vue";
import CommentView from "@/views/Pages/CommentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path:'/contact-me',
      name: 'contactMe',
      component: ContactView
    },
    {
      path: '/add-comment',
      name: 'addComment',
      component: CommentView
    }
  ]
})

export default router
