import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useRole from "../../AuthProvider/role/useRole";

const Addcourses = () => {
  const { user, loading } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [role] = useRole();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const onSubmit = async (data) => {
    try {
      if (selectedCourse) {
        // Update existing course
        await axios.put(
          `https://ass12.vercel.app/courses/${selectedCourse._id}`,
          {
            data,
          },
        );
        console.log("Course updated successfully");
      } else {
        // Add new course
        await axios.post("https://ass12.vercel.app/coursesadd", data);
        console.log("Course added successfully");
      }
      reset(); // Reset the form after successful submission
      setSelectedCourse(null); // Clear the selected course
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
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Add Form</h1>
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
              <input
                {...register("course_status", { required: true })}
                defaultValue="pending"
              />
              {user && (
                <input
                  {...register("email", { required: true })}
                  defaultValue={user.email}
                />
              )}
            </div>

            <button
              className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
            >
              {selectedCourse ? "Update Course" : "Add Course"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Addcourses;
