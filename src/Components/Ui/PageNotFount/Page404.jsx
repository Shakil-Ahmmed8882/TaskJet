import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-screen justify-center">
        <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          Page Not Found
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-accentColor text-[white] w-[200px] h-16 flex justify-center items-center text-[23px] font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
