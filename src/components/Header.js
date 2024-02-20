import React, { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    // toggle Gpt search
    dispatch(toggleGptSearchView());
  };
  useEffect(
    () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return () => unsubscribe(); // removing the listener when the header component is unmounted
    },

    // eslint-disable-next-line
    []
  );

  return (
    <div className="w-screen absolute bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-44" />
      {user && (
        <div className="p-2 flex justify-between items-center">
          <button className="py-2 px-4 mx-4 my-2 text-white bg-purple-500" onClick={handleGptSearchClick}>
            GPT Search
          </button>
          <img className="w-12 h-12 m-auto" src={user?.photoURL} alt="userIcon" />
          <button onClick={handleSignOut} className="text-white font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
