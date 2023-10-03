import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AboutMe from './components/AboutMe/AboutMe.vue';
import MyPortfolio from './components/MyPortfolio.vue';
import MyNotes from './components/MyNotes.vue';

const app = createApp(App);

const routes = [
  { path: '/', component: AboutMe},
  { path: '/portfolio', component: MyPortfolio},
  { path: '/notes', component: MyNotes},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.mount('#app');