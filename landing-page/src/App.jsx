import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Events } from "@/components/Events";

const Home = () => (
	<main>
		<Hero />
		<Features />
		<HowItWorks />
		<Events/>
		<Testimonials />
		<Contact />
	</main>
);

export function App() {
	return (
		<Router>
			<div className="tw:min-h-screen">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					{/*<Route path="#features" element={<Features />} />
					<Route path="#how-it-works" element={<HowItWorks />} />
					<Route path="#testimonials" element={<Testimonials />} />
					<Route path="#contact" element={<Contact />} />*/}
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
