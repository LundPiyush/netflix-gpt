import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const toggleSignInForm = () => {
    setIsSignInForm((isSignInForm) => !isSignInForm);
  };
  const dispatch = useDispatch();
  const fullName = useRef();
  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = () => {
    // validate form data
    const message = checkValidData(email.current.value, password.current.value, fullName?.current?.value);
    setErrorMessage(message);

    //Sign up / Sign in
    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Sign up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error in sign up - ${errorCode} : ${errorMessage}`);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error in logging in - ${errorCode} : ${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="bg_img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/4 md:w-1/4 my-36 bg-black p-12 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-lg md:text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-gray-800 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-gray-800 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-800 rounded-lg"
        />
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button className="bg-red-700 w-full my-6 p-4 rounded-lg" onClick={handleLogin}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
