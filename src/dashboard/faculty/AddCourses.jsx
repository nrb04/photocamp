import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Addcourses = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const [selectedCourse, setSelectedCourse] = useState(null);

  const onSubmit = async (data) => {
    try {
      if (selectedCourse) {
        // Update existing course
        await axios.put(`http://localhost:3000/courses/${selectedCourse._id}`, {
          data,
          email: user.email,
        });
        console.log("Course updated successfully");
      } else {
        // Add new course
        await axios.post("http://localhost:3000/courses", data);
        console.log("Course added successfully");
      }
      reset(); // Reset the form after successful submission

      setSelectedCourse(null); // Clear the selected course
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
            <input
              {...register("course_status", { required: true })}
              defaultValue="pending"
            />
            <input
              {...register("email", { required: true })}
              defaultValue={user.email}
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
    </div>
  );
};

export default Addcourses;
