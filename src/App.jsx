import './App.css';
import { Context } from './Context/Context';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirebaseApp } from 'firebase/app';
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import Navbar from './Components/Navbar';
import { firebaseConfig } from './Config/firebase';
import { initializeApp } from 'firebase/app';

export const app = initializeApp(firebaseConfig);

const App = () => {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Context.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
