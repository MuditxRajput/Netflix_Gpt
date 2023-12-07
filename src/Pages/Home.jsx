import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Components/Header'
import Store from '../store/Store'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
// import { addUser, removeUser } from "../utils/userSlice";
const Home = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
            
  //         })
  //       );
  //     } else {
  //       dispatch(removeUser());
  //     }
  //   });
  // }, []);
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/homepage' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
  
}

export default Home