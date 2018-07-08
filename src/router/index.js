import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import About from '@/components/my-about';
import Recruit from '@/components/recruit';
import Customized from '@/components/customized';
import Field from '@/components/field';
import Broadcast from '@/components/broadcast';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit,
    },
    {
      path: '/customized',
      name: 'customized',
      component: Customized,
    },
    {
      path: '/field',
      name: 'field',
      component: Field,
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast,
    },
  ],
});
