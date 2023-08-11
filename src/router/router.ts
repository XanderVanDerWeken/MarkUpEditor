import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "./../views/HomeView.vue";
import EditorView from "./../views/EditorView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/editor',
        name: 'editor',
        component: EditorView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
