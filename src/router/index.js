import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/pages/HomeView.vue";
import PortfolioView from "@/pages/PortfolioView.vue";
import ContactView from "@/pages/ContactView.vue";
import CommentView from "@/pages/CommentView.vue";

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
