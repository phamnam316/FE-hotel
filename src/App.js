import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import SignUpPage from "./components/home/SignUpPage";
import LoginPage from "./components/home/LoginPage";
import RoomBooking from "./pages/RoomBooking";
import Layout from "./components/common/Layout";
import Dinner from "./pages/Dinner";
import ReservationForm from "./components/common/FormDinner";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/room" element={<RoomBooking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dinner" element={<Dinner/>} />
          <Route path="/dinnerbooking" element={<ReservationForm/>} />
        </Route>
      </Routes>
    </Router>
  );
}
