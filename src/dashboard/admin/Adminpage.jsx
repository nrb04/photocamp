import useRole from "../../AuthProvider/role/useRole";
import Leftnav from "../Leftnav";

// console.log(role);
const Adminpage = () => {
  const [role] = useRole();
  return (
    <div>
      {role === "admin" && (
        <div>
          {/* Content for admin role */}
          <h1>Welcome, Admin!</h1>
          <p>You have access to all the features.</p>
          <Leftnav></Leftnav>
        </div>
      )}

      {role === "user" && (
        <div>
          {/* Content for user role */}
          <h1>Welcome, User!</h1>
          <p>You have limited access to certain features.</p>
        </div>
      )}

      {role === "faculty" && (
        <div>
          {/* Content for faculty role */}
          <h1>Welcome, Faculty!</h1>
          <p>You have access to specific faculty-related features.</p>
        </div>
      )}
    </div>
  );
};

export default Adminpage;
