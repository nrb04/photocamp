import React, { useState, useEffect } from "react";
import axios from "axios";
import useRole from "../../AuthProvider/role/useRole";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [role] = useRole();
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://ass12.vercel.app/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newRole = formData.get("role");

    try {
      if (selectedUser) {
        await axios.patch(
          `https://ass12.vercel.app/userall/${selectedUser._id}`,
          {
            role: newRole,
          },
        );
        console.log("User role updated successfully");
      }
      fetchUsers();
      setSelectedUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://ass12.vercel.app/userdel/${userId}`);
      console.log("User deleted successfully");
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {role === "admin" && (
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
                        Role
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Edit
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <React.Fragment key={user._id}>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <img
                              src={user.image}
                              className="w-12 rounded-full"
                              alt="Avatar"
                            />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {user.name}
                          </td>

                          <td className="whitespace-nowrap px-6 py-4">
                            {user.role}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <button onClick={() => handleEdit(user)}>
                              Edit
                            </button>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex justify-center">
                              <button onClick={() => handleDelete(user._id)}>
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
                        {selectedUser && selectedUser._id === user._id && (
                          <tr
                            key={`${user._id}-edit`}
                            className="border-b dark:border-neutral-500"
                          >
                            <td colSpan="4">
                              <form onSubmit={handleSubmit}>
                                <select
                                  name="role"
                                  defaultValue={selectedUser.role}
                                >
                                  <option value="admin">Admin</option>
                                  <option value="faculty">Faculty</option>
                                </select>
                                <button type="submit">Save</button>
                              </form>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersComponent;
