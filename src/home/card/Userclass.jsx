import { useEffect, useState } from "react";
import axios from "axios";

const fetchCourses = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/use/faculty`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Userclass = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-3 mt-36 md:w-8/12 md:mx-auto ">
        {courses.slice(0, 6).map((course) => (
          <div key={course._id}>
            <div className="mx-auto mb-36  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                  {course.role}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {course.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Userclass;
