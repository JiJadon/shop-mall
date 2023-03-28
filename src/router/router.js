import {createRouter, createWebHashHistory} from 'vue-router';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('/src/views/Index'),
            meta: {title: 'shop-mall'}
        },
        {
            path: '/goodsList',
            name: 'GoodsList',
            component: () => import('/src/components/GoodsList'),
            meta: {title: 'shop-mall'},
        },

        // {
        //     path: '/goodsDetail/:id',
        //     name: 'GoodsDetail',
        //     component: () => import('/src/components/GoodsDetail'),
        //     props: true,
        // },
        {
            path: '/goodsDetail',
            name: 'GoodsDetail',
            component: () => import('/src/components/GoodsDetail'),
            meta: {title: "shop-mall"}
        },
        {
            path: '/cart',
            name: 'ItemShopCart',
            component: () => import('/src/components/ItemShopCart'),
            meta: {title: 'shop-mall'},
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () => import('/src/components/NotFound'),
            meta: {title: '404 - Ups'},
        },
    ],
});
