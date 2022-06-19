import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Product from "@/views/Product";
import ProductDetails from "@/views/ProductDetails";
import About from "@/views/About";
import Login from "@/views/Login";
import Profile from "@/views/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/product/:id",
    component: ProductDetails,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/profile",
    component: Profile,
   
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
  if(to.path == '/profile' || to.path == '/product'){
      let auth =localStorage.getItem('auth');
      if(auth){
        next();
      }else{
        next('/login');
      }
  }else{
    next();
  }
})


export default router;
