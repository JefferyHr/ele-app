import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import FoodDetail from "../views/FoodDetail.vue";
import Login from "../views/Login.vue";
import Category from '../views/Category.vue';
import ChooseFood from "../views/ChooseFood.vue"
import Order from "../views/Order.vue";
import My from "../views/My.vue"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: {
                name: 'ChooseFood'
            }
        },
        {
            path: "/Home",
            name: "Home",
            component: Home,
            children: [
                {
                    path: "ChooseFood",
                    name: "ChooseFood",
                    component: ChooseFood,
                },
                {
                    path: "Category",
                    name: "Category",
                    component: Category,
                },
                {
                    path: "Order",
                    name: "Order",
                    component: Order,
                }, {
                    path: "My",
                    name: "My",
                    component: My,
                }

            ]
        },
        {
            path: "/Login",
            name: "Login",
            component: Login
        },
        {
            path: "/FoodDetail",
            name: "FoodDetail",
            component: FoodDetail
        }
    ]
})

export default router;