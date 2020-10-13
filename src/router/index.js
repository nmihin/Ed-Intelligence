import Vue from "vue";
import Router from "vue-router";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import LessonPlan from "../pages/LessonPlan";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/admin",
        name: "Admin",
        component: Admin
      },
      {
        path: "/lesson-plan",
        name: "Lesson Plan",
        component: LessonPlan
      }
    ]
  });
  