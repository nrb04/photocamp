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

// import axios from "axios";
// import { AuthContext } from "../AuthProvider";
// import { useContext, useEffect } from "react";

// const Userdata = () => {
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchUserRoles = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/users/${user.email}`,
//         );
//         console.log(response.data);
//         // Handle the response data or set it to state variables
//       } catch (error) {
//         console.error(error);
//         // Handle any errors
//       }
//     };

//     if (user) {
//       fetchUserRoles();
//     }
//   }, [user]);

//   return <div></div>;
// };

// export default Userdata;
