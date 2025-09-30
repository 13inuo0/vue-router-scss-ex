import About from "@/views/About.vue";
import Footer from "@/views/Footer.vue";
import Home from "@/views/Home.vue";
import Reser from "@/views/Reser.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/reser",
    component: Reser,
  },
  {
    path: "/footer",
    component: Footer,
  },
    // {}, 페이지당 만들어져야함
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
