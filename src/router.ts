import { createRouter, createWebHashHistory } from 'vue-router';
import Home from  "@/pages/home/index.vue"
import Introduce from "@/pages/introduce/index.vue"
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
        ]
    
})
export default router