import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import { SignIn } from "@admin-panel/pages/SignIn";
import { SignUp } from "@admin-panel/pages/SignUp";
import { Dashboard } from "@admin-panel/pages/Dashboard";
import { AttendeeDashboard } from "@admin-panel/components/AttendeeDashboard";
import { OrganizerDashboard } from "@admin-panel/components/OrganizerDashboard";

import { Navbar } from "@landing-page/components/Navbar";
import { Hero } from "@landing-page/components/Hero";
import { Features } from "@landing-page/components/Features";
import { HowItWorks } from "@landing-page/components/HowItWorks";
import { Testimonials } from "@landing-page/components/Testimonials";
import { Contact } from "@landing-page/components/Contact";
import { Footer } from "@landing-page/components/Footer";

const Home = () => (
	<main>
		<Hero />
		<Features />
		<HowItWorks />
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
					<Route path="/" element={<SignIn />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />{" "}
					<Route path="/attendee-dashboard" element={<AttendeeDashboard />} />
					<Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
