import BannerBox from "./BannerBox";

const Banner = () => {
  return (
    <div>
      <div className="relative m-5 p-16 h-screen bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 mb-10">
        <div className="container mx-auto grid grid-row-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
          <div className="content">
            <div className="flex items-center gap-3">
              <hr className="w-10 bg-orange-500 border " />
              <span className="md:text-[18px] font-medium text-gray-800 ">
                UI/UX Designer Developer
              </span>
            </div>
            <p className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 ">
              m Rownok Mahbub <br />
              Designer And Developer
            </p>
            <p className="mt-5 md:text-md ">
              m creative designer based in Bangladesh, and m very passionate and
              dedicated to my <br className="hidden md:block" /> work.Your
              Satisfaction is my success
            </p>
            <div className="flex gap-4 mt-10">
              <button className="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass ">
                Get In Touch
                <span className="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
              </button>
              {/* <RiFacebookFill className="" />
              <SiBehance /> */}
            </div>
          </div>
          <div className="relative sm:mt-0 mt-10  px-16 sm:px-0">
            <BannerBox></BannerBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
