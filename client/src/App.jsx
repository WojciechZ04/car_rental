import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import Cars from "./pages/Cars";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path="/about" element={<About/>} />
				<Route path="/book" element={<Book/>} />
				<Route path="/cars" element={<Cars/>} />
				<Route path="/help" element={<Help/>} />
				<Route path="/contact" element={<Contact/>} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;