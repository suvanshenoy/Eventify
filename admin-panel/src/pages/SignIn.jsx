import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		if (email === "admin@example.com" && password === "Admin@123") {
			localStorage.setItem("token", "dummyToken");
			navigate("/dashboard");
		} else {
			alert("Login failed! Check credentials.");
		}
	};

	return (
		<div className="">
			<h2>Admin Login</h2>
			<form onSubmit={handleLogin}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button className="" type="submit">
					sign in
				</button>
			</form>
		</div>
	);
}
