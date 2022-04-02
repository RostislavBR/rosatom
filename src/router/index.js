import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/pages/Main";
import HighTechnology from "@/pages/HighTechnology";
import ProcurementSystem from "@/pages/ProcurementSystem";
import SecurityTechnologiesPage from "@/pages/SecurityTechnologiesPage";

Vue.use(VueRouter);

const routes = [
    {name: 'main', component: Main, path: '/'},
    {name: 'highTechnology', component: HighTechnology, path: '/high-technology'},
    {name: 'systemPage', component: ProcurementSystem, path: '/procurement-system'},
    {name: 'securityPage', component: SecurityTechnologiesPage, path: '/security-technology'},
];

const router = new VueRouter({
    routes,
});

export default router;
