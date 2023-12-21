import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../../../Hooks/UseAuth";
import { successToast } from "../../../utils/SuccessToast";
import { errorToast } from "../../../utils/ErrorToast";
const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const { user, signIn, googleSignIn } = UseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goTo = useNavigate();

  //   validation

  const handleLogin = (e) => {
    e.preventDefault();

    signIn(email, password)
      .then(() => {
        successToast("Signed in");
        goTo("/dashboard");
      })
      .catch((err) => errorToast(err.message));
  };

  const handleMedia = (media) => {
    media()
      .then(() => successToast("signed in with google"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="flex  h-screen bg-indigo-700 text-[18px]">
        <div className="bg-[#fff] w-full mx-3 sm:w-[80%] sm:mx-auto  md:w-[470px] py-8 shadow-lg   m-auto bg-indigo-100 rounded-lg p-5">
          <header>
            <img
              className="w-20 h-20 mx-auto object-cover rounded-full "
              src="https://images.pexels.com/photos/5896917/pexels-photo-5896917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </header>
          <div className="text-center flex items-center justify-center py-8">
            <div
              onClick={() => handleMedia(googleSignIn)}
              className="bg-[white] shadow-sm p-2 rounded-full">
              <BsGoogle className="text-2xl text-accentColor" />
            </div>
            <span className="text-[#9CA3AF] text-[18px]">
              Continue with google
            </span>
          </div>
          <form onSubmit={handleLogin}>
            <div>
              <label
                className="flex  gap-1 mb-2 text-indigo-500"
                htmlFor="username">
                <AiOutlineMail className="text-[19px] text-primaryColor" />
                <input
                  className="w-full  mb-6 border-b-1 text-indigo-700  border-indigo-500 outline-none focus:bg-gray-300"
                  type="text"
                  placeholder="user@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  name="username"
                />
              </label>
            </div>
            <div>
              <label
                className="flex gap-1  mb-2 text-indigo-500"
                htmlFor="password">
                <AiOutlineUnlock className="text-[19px] text-primaryColor" />
                <div className="w-full flex relative">
                  <input
                    className="w-full  mb-6 border-b-1 text-indigo-700  border-indigo-500 outline-none focus:bg-gray-300"
                    onChange={(e) => setPassword(e.target.value)}
                    type={passwordType}
                    name="password"
                    placeholder="Password"
                  />

                  {passwordType == "password" ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setPasswordType("text")}
                      className="absolute cursor-pointer right-2"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setPasswordType("password")}
                      className="absolute cursor-pointer right-2"
                    />
                  )}
                </div>
              </label>
            </div>
            <div className="flex justify-center mt-5 items-center gap-2">
              <button
                className="  bg-primaryColor block w-full text-center text-[white] hover:bg-pink-700 text-white  py-2 px-4  rounded"
                type="submit">
                Login
              </button>
              <Link
                to="/signup"
                className="text-indigo-700 block w-full text-center  bg-[#f31eac1c] shadow-sm text-[black] hover:bg-pink-700 text-white  py-2 px-4  rounded btn hover:text-pink-700 "
                href="#">
                sign up
              </Link>
            </div>
          </form>
          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
