import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/pages/Main";
import HighTechnology from "@/pages/HighTechnology";
import ProcurementSystem from "@/pages/ProcurementSystem";
import SecurityTechnologiesPage from "@/pages/SecurityTechnologiesPage";
import PresentationTemplate from "@/pages/PresentationTemplate";
import EngineeringProducts from "@/pages/EngineeringProducts";
import ProductsTak from "@/pages/ProductsTak";

Vue.use(VueRouter);

const routes = [
    {name: 'main', component: Main, path: '/'},
    {name: 'highTechnology', component: HighTechnology, path: '/high-technology'},
    {name: 'systemPage', component: ProcurementSystem, path: '/procurement-system'},
    {name: 'PresentationTemplate', component: PresentationTemplate, path: '/procurement-system/:id'},
    {name: 'securityPage', component: SecurityTechnologiesPage, path: '/security-technology'},
    {name: 'engineeringProducts', component: EngineeringProducts, path: '/engineering-products'},
    {name: 'productsTAK', component: ProductsTak, path: '/products-tak'},
];

const router = new VueRouter({
    routes,
});

export default router;
