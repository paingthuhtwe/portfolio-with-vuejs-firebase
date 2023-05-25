import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/project-detail/:id/:slug",
    name: "project.detail",
    component: () => import("@/components/ProjectDetail.vue"),
    props: true,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashBoard.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
