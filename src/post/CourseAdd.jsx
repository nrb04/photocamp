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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <input {...register("description")} />
        <button type="submit">
          {selectedCourse ? "Update Course" : "Add Course"}
        </button>
      </form>

      {courses.map((course) => (
        <div key={course._id}>
          <h3>{course.name}</h3>
          <p>{course.description}</p>
          <button onClick={() => handleEdit(course)}>Edit Course</button>
          <button onClick={() => handleDelete(course._id)}>
            Delete Course
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseAdd;
