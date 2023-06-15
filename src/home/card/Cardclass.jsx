import { useEffect, useState } from "react";
import axios from "axios";

const fetchCourses = async () => {
  try {
    const response = await axios.get("https://ass12.vercel.app/courses");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Cardclass = () => {
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
      <div className="mx-auto max-w-sm space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <div className="text-2xl text-center font-bold text-black">
            Top Courses
          </div>
          <p className="text-center text-slate-500">
            Here you saw the top couses
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-36 w-8/12 mx-auto">
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
                  {course.price}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cardclass;
