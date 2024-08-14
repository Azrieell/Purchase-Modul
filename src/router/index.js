import {
  createWebHistory,
  createRouter
} from "vue-router";

import MainLayouts from "../layouts/MainLayouts.vue";
import HomeMain from "../views/main/HomeMainView.vue";
import AdminLayouts from "../layouts/AdminLayouts.vue";
import DashboardAdmin from "../views/admin/DashboardAdmin.vue";
import Package from "../views/admin/Package.vue";


const routes = [{
    path: "/",
    component: MainLayouts,
    children: [{
      path: "",
      component: HomeMain,
      name: "HomeMain",
      meta: {
        title: " - Module"
      },
    }, ],
  },
  {
    path: "/admin/dashboard",
    component: AdminLayouts,
    children: [{
        path: "/admin/dashboard",
        name: "DashboardAdmin",
        component: DashboardAdmin,
        meta: {
          title: "Dashboard Admin",
        },
      },
      {
        path: "/admin/purchase",
        component: Package,
        name: "Package",
        meta: {
          title: "Package",
        },
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;