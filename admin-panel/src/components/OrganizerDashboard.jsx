import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export function OrganizerDashboard() {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/sign-in");
		}
	}, [navigate]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/sign-in");
	};

	return (
		<div className="tw:min-h-screen tw:bg-gray-100">
			<nav className="tw:bg-blue-600 tw:p-4">
				<div className="tw:container tw:mx-auto tw:flex tw:justify-between tw:items-center">
					<h1 className="tw:text-white tw:text-2xl tw:font-bold">
						Organizer Dashboard
					</h1>
					<button
						onClick={handleLogout}
						className="tw:bg-red-500 tw:text-white tw:px-4 tw:py-2 tw:rounded tw:hover:bg-red-600"
					>
						Logout
					</button>
				</div>
			</nav>
			<div className="tw:container tw:mx-auto tw:p-6">
				<h2 className="tw:text-3xl tw:font-semibold tw:mb-4">
					Welcome, Organizer!
				</h2>
				<div className="tw:bg-white tw:p-6 tw:rounded-lg tw:shadow-md">
					<p>
						This is your organizer dashboard. Here you can create and manage
						events.
					</p>
				</div>
			</div>
		</div>
	);
}
