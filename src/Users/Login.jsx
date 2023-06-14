import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    if (email === "" || password === "") {
      setError("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    setError(""); // Resetting the error state

    try {
      const result = await login(email, password);
      const user = result.user;
      console.log(user);

      // Send user data to localhost:3000/users
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          displayName: user.displayName,
          role: "users",
        }),
      });

      navigate(from, { replace: true });
    } catch (error) {
      setError("Invalid email or password.");
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      console.log(user);

      // Send user data to localhost:3000/users
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          displayName: user.displayName,
          role: "users",
        }),
      });

      setError("");
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  // Rest of the code...

  return (
    <div>
      <div className="bg-white relative lg:py-20">
        {/* Rest of the JSX code... */}
        <form onSubmit={handleSubmit(handleLogin)}>
          {error && <p>{error}</p>}
          <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Email
              </p>
              <input
                {...register("email", { required: true })}
                placeholder="please enter your email"
                className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                type="email"
              />
              {errors.email && <p>Email is required.</p>}
            </div>
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
              >
                Password
              </p>
              <input
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
                type="password"
                className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
              />
              {errors.password && (
                <p>
                  Password is required and should be at least 6 characters long.
                </p>
              )}
            </div>
            <div className="relative">
              <button
                type="submit"
                className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <button onClick={handleGoogleLogin}>googleLogin</button>
      </div>
    </div>
  );
};

export default Login;
