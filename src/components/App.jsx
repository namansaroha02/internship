import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import About from "../pages/About";
import MainSection from "../pages/MainSection";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainSection />} />
				<Route path="/home" element={<MainSection />} />
				<Route path="/aboutus" element={<About />} />
				<Route path="/contactus" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;