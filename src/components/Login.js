import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm((isSignInForm) => !isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg_img" />
      </div>
      <form className="absolute w-1/4 my-36 bg-black p-12 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-800 rounded-lg"
        />
        <button className="bg-red-700 w-full my-6 p-4 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
