'use strict';
//加载vue组件
import Vue from 'vue';
//1-3.加载路由组件组件
import VueRouter from 'vue-router';
//1-3.加载$http服务组件
import VueResource from 'vue-resource';

//加载静态资源
import '../../statics/util/reset.css';
import '../../statics/css/main.css';

//加载入口文件
import App from './app.vue';

//加载其它页面组件文件
import home from '../components/home/home.vue';
import main from '../components/main/main.vue';

//启动组件
Vue.use(VueResource);
Vue.use(VueRouter);

//创建路由
const vueRouter = new VueRouter({
    routes: [
        {name: '/', path: '/', redirect: 'home'},
        {name: 'home', path: '/home', component: home},
        {name: 'main', path: '/main', component: main}
    ]
});

new Vue({
    el: '#app',
    router: vueRouter,
    render: c => c(App)
});