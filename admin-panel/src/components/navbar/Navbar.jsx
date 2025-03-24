import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Navbar.css";

export function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
	};

	return (
		<nav className="navbar">
			<div className="nav-left">
				<h2>Admin Panel</h2>
			</div>
			<div className="nav-center">
				<a href="#">Home</a>
				<a href="#">About Us</a>
				<a href="#">Contact Us</a>
				<a href="#">Our Services</a>
				<a href="#">Our Event organizers</a>
			</div>
			<div className="nav-right">
				<div className="dropdown">
					<button
						onClick={() => setDropdownOpen(!dropdownOpen)}
						className="dropdown-btn"
					>
						Settings ▼
					</button>
					{dropdownOpen && (
						<div className="dropdown-content">
							<p className="dropdown-text">Admin</p>
							<button onClick={handleLogout} className="dropdown-item">
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
