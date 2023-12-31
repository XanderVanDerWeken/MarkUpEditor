import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "./../views/HomeView.vue";
import EditorView from "./../views/EditorView.vue";
import ConfigView from "./../views/ConfigView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/editor/:filename',
        name: 'editor',
        component: EditorView,
    },
    {
        path: '/config',
        name: 'config',
        component: ConfigView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
