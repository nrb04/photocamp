import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import CourseAdd from "../post/CourseAdd";
import Login from "../Users/Login";
import Registration from "../Users/Registration";

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
]);

export default router;
