import {createRouter, createWebHistory} from 'vue-router'
import Tasks from "@/views/Tasks";
import Task from "@/views/Task";
import New from "@/views/New";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/task/:taskId?', component: Task, },
    { path: '/new', component: New }

    // { path: '/:notFound(.*)', component: NotFound}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
