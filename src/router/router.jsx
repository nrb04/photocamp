import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import CourseAdd from "../post/CourseAdd";
import Login from "../Users/Login";
import Registration from "../Users/Registration";
import Adminpage from "../dashboard/admin/Adminpage";
import Allcourses from "../dashboard/students/Allcourses";
import StripeContainer from "../Stripe/StripeContainer";

import ErrorPage from "../ErrorPage";
import Main from "../home/Main";
import Dashboard from "../dashboard/Dashboard";
import Cardclass from "../home/card/Cardclass";
import Myclasses from "../dashboard/students/Myclasses";

import AllUserclass from "../navClassUser/AllUserclass";
import Addcourses from "../dashboard/faculty/AddCourses";

// import Leftnav from "../dashboard/Leftnav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <CourseAdd></CourseAdd>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/admin",
        element: <Adminpage />,
      },
      {
        path: "/all",
        element: <Allcourses />,
      },
      {
        path: "/faculty",
        element: <AllUserclass />,
      },
      {
        path: "/test",
        element: <Addcourses></Addcourses>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/class",
        element: <Cardclass></Cardclass>,
      },
      {
        path: "/dashboard/s/all",
        element: <Allcourses />,
      },
      {
        path: "/dashboard/s/my",
        element: <Myclasses></Myclasses>,
      },
      {
        path: "/dashboard/pay/:id",
        element: <StripeContainer></StripeContainer>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
