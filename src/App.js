// App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  // const isAuthenticated = true; 

  return (
    
   <>
   <Navbar/>
    <main>
      
    <Router>
      
   <Routes>
    {/* <Route  element={<PrivateRoute isAuthenticated={isAuthenticated} />}> */}
    {/* <Route path="/" element={<Home />} /> </Route> */}


    <Route path="/login" element={<Login/>} />
    <Route path="/" element={<PrivateRoute Component={Home}/>} />
    <Route path="profile" element={<PrivateRoute Component={Profile}/>} />
    </Routes>
 </Router>
 </main></>
  );
};

export default App;
