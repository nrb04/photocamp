import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const fetchCourses = async () => {
  try {
    const response = await axios.get("http://localhost:3000/courses");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Allcourses = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };

    fetchData();
  }, []);

  const handleAddClasses = async (course) => {
    const users = {
      email: user.email, // Replace with the actual user's email
      payment: "Added",
      courseId: course._id, // Add course._id as courseId
      course,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/myclasses",
        users,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <>
        <div className="grid grid-cols-3 mt-36 w-8/12 mx-auto">
          {courses.map((course) => (
            <div key={course._id}>
              <div className="mx-auto mb-36 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg h-36 -mt-16"
                    src={course.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {course.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {course.price}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {course.availableSeats}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    total enroll students {course.enroll}
                  </p>
                  <button
                    onClick={() => handleAddClasses(course)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add classes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Allcourses;
