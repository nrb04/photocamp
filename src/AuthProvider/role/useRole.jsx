import axios from "axios";
import { AuthContext } from "../AuthProvider";
import { useContext, useEffect, useState } from "react";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchUserRoles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${user.email}`,
        );
        const responseData = response.data;
        setRole(responseData.role);
      } catch (error) {
        console.error(error);
        // Handle any errors
      }
    };

    if (user) {
      fetchUserRoles();
    }
  }, [user]);

  return [role];
};

export default useRole;
