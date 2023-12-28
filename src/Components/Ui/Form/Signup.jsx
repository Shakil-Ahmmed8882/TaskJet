import { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineUnlock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { CgUserAdd } from "react-icons/cg";
import { CgLink } from "react-icons/cg";



import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../../../Hooks/UseAuth";
import { successToast } from "../../../utils/SuccessToast";
import { validate } from "../../../utils/validate";
import { errorToast } from "../../../utils/ErrorToast";

const SignUp = () => {
  const [passwordType, setPasswordType] = useState("password");
  const { updateUserProfile, createUser } = UseAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");



  const goTo = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();

    validate(name,email,photoURL,password)
    const isValid = validate(name,email,photoURL,password)

    if(isValid) return 

    console.log('it is the photourl', photoURL)
    updateUserProfile(name, photoURL)
      .then(() => {
        console.log('photo of the user is set');
      })
      .catch((err) => console.log(err));
    

    createUser(email, password)
    .then(() => {
        successToast("created user");

        goTo("/dashboard");
      })
      .catch((err) => errorToast(err.message));
  };

  return (
    <div className="flex h-screen bg-indigo-700 text-[18px]">
      <div className="bg-[#fff] w-full mx-3 sm:w-[80%] sm:mx-auto  md:w-[470px] py-8 shadow-lg m-auto bg-indigo-100 rounded-lg p-5">
        <header>
          <img
            className="w-20 h-20 mx-auto object-cover rounded-full"
            src="https://images.pexels.com/photos/5896917/pexels-photo-5896917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </header>
        <form onSubmit={handleSignUp}>
          <div>
            <label className="flex gap-1 mb-2 text-indigo-500" htmlFor="name">
              <CgUserAdd className="text-[19px] text-primaryColor" />
              <input
                className="w-full mb-6 border-b-1 text-indigo-700 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </label>
          </div>
          <div>
            <label className="flex gap-1 mb-2 text-indigo-500" htmlFor="email">
              <AiOutlineMail className="text-[19px] text-primaryColor" />
              <input
                className="w-full mb-6 border-b-1 text-indigo-700 border-indigo-500 outline-none focus:bg-gray-300"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </label>
          </div>
          <div>
            <label
              className="flex gap-1 mb-2 text-indigo-500"
              htmlFor="photoURL">
              <CgLink className="text-[19px] text-primaryColor" />
              <input
                className="w-full mb-6 border-b-1 text-indigo-700 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                placeholder="Photo URL"
                onChange={(e) => setPhotoURL(e.target.value)}
                name="photoURL"
              />
            </label>
          </div>
          <div>
            <label
              className="flex gap-1 mb-2 text-indigo-500"
              htmlFor="password">
              <AiOutlineUnlock className="text-[19px] text-primaryColor" />
              <div className="w-full flex relative">
                <input
                  className="w-full mb-6 border-b-1 text-indigo-700 border-indigo-500 outline-none focus:bg-gray-300"
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordType}
                  name="password"
                  placeholder="Password"
                />

                {passwordType === "password" ? (
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
            <Link
              to="/login"
              className="text-indigo-700 block w-full text-center bg-[#f31eac1c] shadow-sm text-[black] hover:bg-pink-700 text-white py-2 px-4 rounded btn hover:text-pink-700">
              Login
            </Link>
            <button
              type="submit"
              className="bg-primaryColor block w-full text-center text-[white] hover:bg-pink-700 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
