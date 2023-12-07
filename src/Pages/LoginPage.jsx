import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useRef, useState } from "react";
import Validate from "../utils/Validate";
import { auth } from "../utils/firebase";
const LoginPage = () => {
  const [LoginIn, setLoginIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handle = () => {
    setLoginIn(!LoginIn);
  };
  const email = useRef();
  const pass = useRef();
  const validate = () => {
    const message = Validate(email.current.value, pass.current.value);
    setErrorMessage(message);
    if (message) return;

    if (LoginIn) {
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // dispatchUserToRedux(user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
        // dispatchUserToRedux(user);
        
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
  };
  return (
    <div className=" relative h-screen bg-black">
      <img
        className="w-full h-full object-cover opacity-40    "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className=" absolute inset-0  flex justify-center items-center">
        <div className=" w-[300px]  md:w-[450px]  bg-black opacity-70 rounded-lg ">
          <div className="bg-black">
            <div className=" mt-4 md:mt-20 mx-[36px] md:mx-[55px] px-2 ">
              <p
                className=" text-white text-3xl md:text-4xl
              font-bold
            "
              >
                {LoginIn ? "Login In" : "Sign Up"}
              </p>
            </div>

            {/* <div className="mt-9 flex flex-col items-center gap-10 w-full h-[480px]  "> */}
            <form
              className="mt-9 mb-5 flex flex-col items-center gap-10 w-full h-[480px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                ref={email}
                type="text"
                placeholder="Email"
                className=" w-50 md:w-80 p-2 md:p-4 rounded-md bg-white text-black
             border-0 outline-none text-md focus:border-2 focus:border-red-700
            "
              />
              <input
                ref={pass}
                type="password"
                placeholder="Password"
                className="w-50 md:w-80 p-2 md:p-4 rounded-md bg-white text-black
            border-0 outline-none text-md focus:border-2 focus:border-red-700
           "
              />
              {!LoginIn && (
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-50 md:w-80 p-2 md:p-4 rounded-md bg-white text-black
               border-0 outline-none text-md focus:border-2 focus:border-red-700
              "
                />
              )}
              <p className="text-red-500 font-semibold"> {errorMessage}</p>

              <div className="flex justify-center w-full   ">
                <button
                  className="md:w-80 w-52 py-2 md:py-3 border-2 border-red-700 bg-red-700 text-white font-bold rounded"
                  onClick={validate}
                >
                  {LoginIn ? "Log In" : "Sign Up"}
                </button>
              </div>
              <p
                onClick={handle}
                className="text-white cursor-pointer hover:text-red-700 hover:font-bold"
              >
                {LoginIn ? "New to Netflix? Sign Up" : "Already a member"}{" "}
              </p>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
