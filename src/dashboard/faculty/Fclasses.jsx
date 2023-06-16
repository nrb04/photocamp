import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useRole from "../../AuthProvider/role/useRole";

const fetchCourses = async (email) => {
  try {
    const response = await axios.get(`https://ass12.vercel.appcourse/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Fclasses = () => {
  const [courses, setCourses] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const [role] = useRole();
  useEffect(() => {
    const fetchData = async () => {
      if (user && user.email) {
        const courses = await fetchCourses(user.email);
        setCourses(courses);
      }
    };

    fetchData();
  }, [user]);

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`https://ass12.vercel.appcourses/${courseId}`);
      console.log("Course deleted successfully");
      const updatedCourses = await fetchCourses(user.email); // Fetch updated courses
      setCourses(updatedCourses);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    // Render a loading state while user data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      {role === "faculty" && (
        <div>
          <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Instrautor all Classes
            </h1>
          </div>

          <div className="flex flex-col w-8/12 mx-auto">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Photo
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Name
                        </th>

                        <th scope="col" className="px-6 py-4">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-4">
                          course_status
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    {courses.map((course) => (
                      <tbody key={course._id}>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <img
                              src={course.image}
                              className="w-12 rounded-full"
                              alt="Avatar"
                            />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {course.name}
                          </td>

                          <td className="whitespace-nowrap px-6 py-4">
                            {course.price}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {course.course_status}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex justify-center">
                              <button onClick={() => handleDelete(course._id)}>
                                <svg
                                  className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fclasses;
