import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CourseAdd = () => {
  const { register, handleSubmit, reset } = useForm();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (selectedCourse) {
        // Update existing course
        await axios.put(
          `http://localhost:3000/courses/${selectedCourse._id}`,
          data,
        );
        console.log("Course updated successfully");
      } else {
        // Add new course
        await axios.post("http://localhost:3000/courses", data);
        console.log("Course added successfully");
      }
      reset(); // Reset the form after successful submission
      fetchCourses(); // Fetch updated courses
      setSelectedCourse(null); // Clear the selected course
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    reset(course); // Fill the form with the selected course details
  };

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`http://localhost:3000/courses/${courseId}`);
      console.log("Course deleted successfully");
      fetchCourses(); // Fetch updated courses
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">add from</h1>
        <form
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              {...register("name")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image Url
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              {...register("image")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              {...register("price")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              availableSeats
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              {...register("availableSeats")}
            />
          </div>

          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            {selectedCourse ? "Update Course" : "Add Course"}
          </button>
        </form>
      </div>

      <div className="flex flex-col w-9/12 mx-auto">
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
                      Instructor
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Edit
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
                        {course.instructor}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {course.price}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button onClick={() => handleEdit(course)}>edit</button>
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
  );
};

export default CourseAdd;
