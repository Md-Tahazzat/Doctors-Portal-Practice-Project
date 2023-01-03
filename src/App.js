import Navbar from "./components/shared/Navbar";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Appointment from "./components/pages/Appointment/Appointment";
import About from "./components/pages/About/About";
import ContactUs from "./components/pages/Contact/ContactUs";
import Reviews from "./components/pages/Reviews/Reviews";
import SignIn from "./components/shared/SignIn";
import SignUp from "./components/shared/SignUp";
import FileNotFound from "./components/shared/FileNotFound";

export default function App() {
  return (
    <div className="bg-slate-50 text-black dark:bg-slate-800 dark:text-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="appointment" element={<Appointment></Appointment>} />
        <Route path="about" element={<About></About>} />
        <Route path="contact" element={<ContactUs></ContactUs>} />
        <Route path="reviews" element={<Reviews></Reviews>} />
        <Route path="signIn" element={<SignIn></SignIn>} />
        <Route path="signUp" element={<SignUp></SignUp>} />
        <Route path="*" element={<FileNotFound></FileNotFound>} />
      </Routes>
    </div>
  );
}
