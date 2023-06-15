import { Link, Outlet } from "react-router-dom";
import useRole from "../AuthProvider/role/useRole";

const Leftnav = () => {
  const [role] = useRole();
  return (
    <div className="flex">
      <div className="flex flex-col w-1/6">
        <div className="mt-20">
          <Link to="/">Home</Link>
        </div>
        {role === "users" && (
          <div>
            {/* Content for user role */}

            <div>
              <Link to="/dashboard/s/all">All Classes</Link>
            </div>
            <Link to="/dashboard/s/my">My Classes</Link>
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
      </div>
      <div className="flex flex-col w-5/6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Leftnav;
