const Leftnav = () => {
  return (
    <div>
      <header className="bg-white shadow-sm w-full fixed z-10  top-0 ">
        <div className="max-auto  px-8 py-2 bg-white">
          <div className="flex justify-between">
            <div className="logo flex items-center space-x-4 mr-10">
              <img
                className="h-8"
                src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg"
                alt=""
              />

              <h1 className="text-gray-600 text-2xl">Data Studio</h1>
            </div>
            <div className="flex-1 ml-8">
              <div className="w-full inline-flex">
                <input
                  type="text"
                  placeholder="Search Data Studio"
                  className="w-full rounded-md text-gray-800 bg-gray-100 focus:bg-white 
                focus:outline-none focus:shadow-lg py-3 px-10 max-w-xl text-md focus:text-gray-800"
                />
                <svg
                  className="h-5  mt-4 px-4  absolute  text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className=" menu flex justify-end  items-center  flex-1 space-x-4">
              <svg
                className="h-7   text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                className="h-7   text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                className="h-7   text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>

              <img
                className="h-9 rounded-full border border-gray-100 shadow-sm"
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="user image"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 mt-20">
        <aside className="col-span-4 bg-white h-screen py-5  w-60">
          <button className="flex items-center align-middle py-2 bg-white shadow-md  rounded-3xl text-gray-800 text-sm font-semibold ml-3 border border-gray-200 hover:shadow-xl transition-all w-36  focus:outline-none">
            {" "}
            <svg className="h-8 px-4" viewBox="0 0 36 36">
              <path
                className="ng-tns-c17-1"
                d="M16 16v14h4V20z"
                fill="#34A853"
              ></path>
              <path
                className="ng-tns-c17-1"
                d="M30 16H20l-4 4h14z"
                fill="#4285F4"
              ></path>
              <path
                className="ng-tns-c17-1"
                d="M6 16v4h10l4-4z"
                fill="#FBBC05"
              ></path>
              <path
                className="ng-tns-c17-1"
                d="M20 16V6h-4v14z"
                fill="#EA4335"
              ></path>
              <path
                className="ng-tns-c17-1"
                d="M0 0h36v36H0z"
                fill="none"
              ></path>
            </svg>
            Create
          </button>

          <div className="mt-5">
            <div className="bg-blue-50 mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button className="text-blue-500 text-sm font-semibold flex items-center  focus:outline-none">
                <svg
                  className="h-5  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Recent
              </button>
            </div>
            <div className="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button className="text-gray-600  text-sm font-semibold flex items-center  focus:outline-none">
                <svg
                  className="h-6  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Shared with me
              </button>
            </div>

            <div className="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button className="text-gray-600 text-sm font-semibold flex items-center  focus:outline-none">
                <svg
                  className="h-6  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Owned by me
              </button>
            </div>

            <div className="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button className="text-gray-600  text-sm font-semibold flex items-center focus:outline-none">
                <svg
                  className="h-6  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Trash
              </button>
            </div>

            <hr className="my-2"></hr>
            <div className="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
              <button className="text-gray-600  text-sm font-semibold flex items-center focus:outline-none">
                <svg
                  className="h-6  px-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
                Enterprise Admin
              </button>
            </div>
          </div>
        </aside>{" "}
        <div className="col-span-4 absolute px-4  w-full pr-10">
          <div className="bg-white ml-64  mt-5">
            <hr className="my-5"></hr>

            <div className="flex justify-between">
              <h3 className="font-semibold text-gray-500">
                Start with a Template
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftnav;
