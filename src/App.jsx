// import { useState } from 'react'
// import React, { Component } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;