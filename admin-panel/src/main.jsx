import React from "react";
import "./styles.css";
import "./tw-styles.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	</React.StrictMode>,
);
