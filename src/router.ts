import { createRouter, createWebHashHistory } from 'vue-router';
import Home from  "@/pages/home/index.vue"
import Introduce from "@/pages/introduce/index.vue"
import Global from "@/pages/global/index.vue"
import News from "@/pages/news/index.vue"
import newsDetails from "@/pages/news/details.vue"
import Gfdz from "@/pages/gfdz/index.vue"
import Cnsystem from "@/pages/cnsystem/index.vue"
import Service from "@/pages/service/index.vue"
import Download from "@/pages/download/index.vue"
import Concact from "@/pages/concact/index.vue"
const router = createRouter({
        history:createWebHashHistory(),
        routes:[
            {
                name:'home',
                path:"/",
                redirect:'/home',
                children:[
                    {
                        name:'home',
                        path:"/home",
                        component:Home
                    }
                ]
            },
            {
                name:'introduce',
                path:"/introduce",
                component:Introduce
            },
            {
                name:'global',
                path:"/global",
                component:Global
            },
            {
                name:'news',
                path:"/news",
                component:News
            },
            {
                name:'news-details',
                path:"/news-details",
                component:newsDetails
            },
            {
                name:'gfdz',
                path:"/gfdz",
                component:Gfdz
            },
            {
                name:'cnsystem',
                path:"/cnsystem",
                component:Cnsystem
            },
            {
                name:'service',
                path:"/service",
                component:Service
            },
            {
                name:'download',
                path:"/download",
                component:Download
            },
            {
                name:'concact',
                path:"/concact",
                component:Concact
            },
            
        ]
    
})
export default router