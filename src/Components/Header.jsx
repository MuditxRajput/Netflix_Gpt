// Header.js
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../store/UserSlices';
import { auth } from '../utils/firebase';
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const signout=()=>{
      signOut(auth)
      .then(()=>{})
      .catch((error)=>{
        navigate('/error');
      })
    }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        
        const{uid,email,pass} = user;
          dispatch(addUser({uid:uid,email:email,pass:pass}))
          navigate('./Homepage');

        // ...
      } else {
        dispatch(removeUser())
        navigate('./');
        // User is signed out
        // ...
      }
    });
  },[])
    return (
    <div className=" flex justify-between absolute bg-transparent  z-40 w-32 sm:w-full ">
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" 
      className=" w-52 " />
      <button  className='border-2 px-2 rounded-lg bg-red-500 text-white font-semibold flex justify-center items-center border-red-700 h-12 m-2' onClick={signout}>Sign out</button>
    </div>
  );
};

export default Header;
