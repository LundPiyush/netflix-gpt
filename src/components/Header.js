import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
  const handleLanguageChange = (e) => {
    // change language
    dispatch(changeLanguage(e.target.value));
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
    <div className="w-screen absolute bg-gradient-to-b from-black px-0 md:px-8 py-2 z-10 flex flex-col md:flex-row justify-between">
      <img src={LOGO} alt="logo" className="w-44 m-auto md:m-0" />
      {user && (
        <div className="p-2 flex justify-between items-center">
          {showGptSearch && (
            <select
              className="bg-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none m-2"
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button className="py-2 px-4 mx-4 my-2 text-white bg-purple-500" onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <div className="flex">
            <img className="w-12 h-12 m-auto hidden md:inline-block" src={user?.photoURL} alt="userIcon" />
            <button onClick={handleSignOut} className="text-white font-bold mx-2">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
