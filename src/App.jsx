import React from 'react'
import { Routes, Route } from "react-router";
import Login from './pages/Login'
import Signup from './pages/Signup';
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (

    <div>
      <AppRoutes/>
    </div>
  );
}

export default App
