import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Particles from 'particles.vue3';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(Particles).use(router).mount('#app');
