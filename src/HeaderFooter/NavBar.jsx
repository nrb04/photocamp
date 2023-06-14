import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <div className="flex flex-col">
        <div
          className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5
            bg-blue-500"
        >
          <nav
            className="flex justify-around py-4  backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 "
          >
            <div className="flex items-center">
              <Link to="/" className="cursor-pointer">
                <h3 className="text-2xl font-medium text-blue-500">
                  <img
                    className="h-10 object-cover"
                    src="/toyLogo.png"
                    alt="PhotoCamp"
                  />
                </h3>
              </Link>
            </div>

            <div className="items-center hidden space-x-8 lg:flex">
              <Link
                to="/"
                className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/faculty"
                className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
              >
                Instructors
              </Link>
              <Link
                to="/all"
                className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
              >
                Classes
              </Link>
              {user && (
                <>
                  {" "}
                  <Link
                    to="/dashboard"
                    className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>

            <div className="flex items-center space-x-5">
              <Link
                to="/registration"
                className="flex text-gray-600 hover:text-blue-500 cursor-pointer
                transition-colors duration-300"
              >
                Sign Up
              </Link>

              {user ? (
                <Link
                  onClick={handleLogout}
                  to="/"
                  className="flex text-gray-600 hover:text-blue-500 cursor-pointer
                transition-colors duration-300"
                >
                  LogOut
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex text-gray-600 hover:text-blue-500 cursor-pointer
                transition-colors duration-300"
                >
                  Login
                </Link>
              )}
              {user && (
                <img
                  src={user.photoURL}
                  title={user.email}
                  className="round-fullinline-block h-8 w-8 rounded-full ring-2 ring-white"
                ></img>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
