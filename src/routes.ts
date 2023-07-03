import { createRouter, createWebHistory } from "vue-router";
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import Home from './components/HomePage.vue'
import EmployeesList from './components/EmployeesList.vue'
import EmployeesNumber from './components/EmployeesNumber.vue'
import SettingsSection from './components/SettingsSection.vue'



const routes: Array<any> = [ 
    {

        path: '/',
        name: 'Home',
        component: Home ,
        meta: {
            title: 'Strona Główna'
        },
    },
    {
        path: '/list',
        name: 'List',
        component: EmployeesList ,
        meta: {
            title: 'Lista Pracowników'
        }
    },
    {
        path: '/number',
        name: 'Number',
        component: EmployeesNumber ,
        meta: {
            title: 'Liczba Pracowników'
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: SettingsSection,
        meta: {
            title: 'Ustawienia'
        }

    }
    
]


const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'exact-active-link',
    routes
})

router.beforeEach((to:RouteLocationNormalized) => {
    const title = typeof to.meta?.title === 'string' ? to.meta.title: "Brak"

    document.title = title
    
})

export default router