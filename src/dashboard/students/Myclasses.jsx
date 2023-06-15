import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useRole from "../../AuthProvider/role/useRole";

const fetchUserCourses = async (email) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/myclasses/${email}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Myclasses = () => {
  const [userCourses, setUserCourses] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const [role] = useRole();
  useEffect(() => {
    const fetchData = async () => {
      const courses = await fetchUserCourses(user.email);
      setUserCourses(courses);
    };

    fetchData();
  }, [user.email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {role === "users" && (
        <div className="grid grid-cols-3 mt-36 w-8/12 mx-auto">
          {userCourses.map((course) => (
            <div key={course._id}>
              <div className="mx-auto mb-36 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg h-36 -mt-16"
                    src={course.course.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {course.course.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {course.course.price}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {course.payment}
                  </p>
                  <button
                    onClick={() =>
                      (window.location.href = `/dashboard/pay/${course._id}`)
                    }
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Payment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myclasses;
