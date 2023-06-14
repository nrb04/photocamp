import { Link, Outlet } from "react-router-dom";
import useRole from "../AuthProvider/role/useRole";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { useContext } from "react";

const Leftnav = () => {
  const [role] = useRole();
  // const { user, handleLogout } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="flex flex-col w-1/6">
        <div>
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
      </div>
      <div className="flex flex-col w-5/6">
        {" "}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Leftnav;
