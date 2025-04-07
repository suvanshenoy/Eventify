import React from "react";
import "./styles.css";
import "./tw-styles.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { SignIn } from "@/pages/SignIn";
import { SignUp } from "@/pages/SignUp";
import { Dashboard } from "@/pages/Dashboard";
import { AttendeeDashboard } from "@/components/AttendeeDashboard";
import { OrganizerDashboard } from "@/components/OrganizerDashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/attendee-dashboard" element={<AttendeeDashboard />} />
				<Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
			</Routes>
		</Router>
	</React.StrictMode>,
);
