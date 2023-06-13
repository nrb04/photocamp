import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Registration = () => {
  const { googleLogin, createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, photo, email, password } = data;
    console.log(name, photo, email, password);

    try {
      const result = await createUser(email, password);
      const createdUser = result.user;
      console.log(createdUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await googleLogin();
      const { displayName, email, photoURL } = result.user;
      console.log(displayName, email, photoURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-white relative lg:py-20">
        <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10"></div>
            </div>
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                  Sign up for an account
                </p>
                <form onSubmit={handleSubmit(handleRegister)}>
                  <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Full name
                      </p>
                      <input
                        {...register("name", { required: true })}
                        placeholder="your full name"
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        type="text"
                        name="name"
                      />
                      {errors.name && <p>Full name is required.</p>}
                    </div>
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Photo url
                      </p>
                      <input
                        {...register("photo")}
                        placeholder="photo link plz"
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        name="photo"
                        type="text"
                      />
                    </div>
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Email
                      </p>
                      <input
                        {...register("email", { required: true })}
                        placeholder="please enter your email"
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        type="email"
                        name="email"
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
                        {...register("password", { required: true })}
                        placeholder="Password"
                        type="password"
                        name="password"
                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      />
                      {errors.password && <p>Password is required.</p>}
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={handleGoogleRegister}
                        className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-red-500 rounded-lg transition duration-200 hover:bg-red-600 ease"
                      >
                        Sign up with Google
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
