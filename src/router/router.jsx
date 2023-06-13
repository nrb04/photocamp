import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import CourseAdd from "../post/CourseAdd";
import Login from "../Users/Login";
import Registration from "../Users/Registration";
import Adminpage from "../dashboard/admin/Adminpage";
import Allcourses from "../dashboard/students/Allcourses";
import StripeContainer from "../Stripe/StripeContainer";

const router = createBrowserRouter([
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
    path: "/pay",
    element: <StripeContainer></StripeContainer>,
  },
]);

export default router;
