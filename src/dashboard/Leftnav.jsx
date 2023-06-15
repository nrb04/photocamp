import { Link, Outlet } from "react-router-dom";
import useRole from "../AuthProvider/role/useRole";
import { Button } from "@material-tailwind/react";

const Leftnav = () => {
  const [role] = useRole();
  return (
    <div className="flex ">
      <div className="flex flex-col w-1/6 border-x-8 rounded-xl">
        <div className="mt-20 mx-auto">
          <Button variant="outlined">
            <Link to="/">Home</Link>
          </Button>
        </div>
        {role === "users" && (
          <div className="mx-auto">
            {/* Content for user role */}

            <Link to="/dashboard/s/all">All Classes</Link>

            <div>
              {" "}
              <Link to="/dashboard/s/my">My Classes</Link>
            </div>
          </div>
        )}
        {role === "admin" && (
          <div>
            {/* Content for user role */}

            <div>
              <Link to="/dashboard/a/c">All Classes</Link>
            </div>
            <Link to="/dashboard/a/user">user modified</Link>
          </div>
        )}
        {role === "faculty" && (
          <div>
            {/* Content for user role */}

            <div>
              <Link to="/dashboard/f/add">Add Classes</Link>
            </div>
            <Link to="/dashboard/f/myclass">Instrator all classes</Link>
          </div>
        )}
      </div>
      <div className="flex flex-col w-5/6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Leftnav;
