import { Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import Hero from "../components/Hero";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main layout wrapper for the application */}
      <Route path="/" element={<Main />}>
        {/* 
          The "index" route renders the Hero component by default 
          when the user visits the root path ("/").
          Equivalent to  <Route path="" element={<Hero />} />
        */}
        <Route index element={<Hero />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
