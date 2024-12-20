import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";

const MainApp = () => {
  return (
    <>
      <h1>Main App</h1>

      {/* Navbar */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>

      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};

export default MainApp;
