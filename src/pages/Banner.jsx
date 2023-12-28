import { Link } from "react-router-dom";
import { UseAuth } from "../Hooks/UseAuth";
import Home from "./Home";

const Banner = () => {
  const {user} = UseAuth()
  return (
    <div>
      <div className="my-32">
      <Home/>

      </div>
      <>
        {/* https://gist.github.com/goodreds/3d044027175954984fb96c7407a955ab */}
        {/* Container */}
        <div className="relative flex flex-col  mx-auto lg:flex-row-reverse lg:max-w-5xl  xl:max-w-6xl">
          {/* Image Column */}
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              className="md:h-[93vh] md:relative -top-20 w-full object-cover"
              src="https://media.istockphoto.com/id/1011182136/photo/check-off-completed-tasks-on-a-to-do-list.jpg?b=1&s=612x612&w=0&k=20&c=8sMt4uxx_AmjAgAOC8Vxox_xH0_E6bqsfBkQg2jdtX0="
              alt="Winding mountain road"
            />
          </div>
          {/* Close Image Column */}
          {/* Text Column */}
          <div className="max-w-lg bg-white md:max-w-full w-full md:z-10 md:shadow-lg bg-[white]  md:absolute md:top-0 md:mt-48 lg:w-3/5  lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            {/* Text Wrapper */}
            <div className="flex flex-col md:p-12 text-center sm:text-left md:px-16">
              <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl mt-5 md:mt-0">
                Welcome to Tasklet
              </h2>
              <p className="mt-4">
                
              Schedule your priorities rather than merely prioritizing what's on your calendar. Focus on one task at a time. For instance, if your project involves research, dedicate specific, focused time solely to gathering information before moving on
            </p>
              {/* Button Container */}
              <div className="mt-8">
                <Link

                  to={`${user?"/dashboard":"/login"}`}
                    className="inline-block  text-center w-full sm:w-1/2 bg-primaryColor rounded-lg  border-none md:text-lg font-medium text-gray-100 bg-green-600 text-[white] border-2 border-gray-600 md:py-4 py-2 md:px-10  hover:bg-green-800 hover:shadow-md md:w-48">
                  Let&apos;s Explore
                </Link>
              </div>
            </div>
            {/* Close Text Wrapper */}
          </div>
          {/* Close Text Column */}
        </div>
      </>
    </div>
  );
};

export default Banner;
