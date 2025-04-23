import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export function SignIn() {
	const [signInData, setSignInData] = useState({
		role: "organizer",
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSignInData({ ...signInData, [name]: value });
	};

	const handleSignIn = async (e) => {
		e.preventDefault();
		setError("");

		try {
			const response = await axios.post(
				"http://localhost:8080/api/admin/signin",
				signInData,
				{ responseType: "json" },
			);

			if (response.status === 200) {
				localStorage.setItem("token", response.data.token);
				const { role, userId } = response.data;
				
				if (role === "admin") {
					navigate("/dashboard");
				} else if (role === "attendee") {
					localStorage.setItem("attendeeId", userId);
					navigate("/attendee-dashboard");
				} else if (role === "organizer") {
					localStorage.setItem("organizerId", userId);
					navigate("/organizer-dashboard");
				}
			}
		} catch (err) {
			setError("Sign in failed! Please check your credentials.");
			console.error(err);
		}
	};

	return (
		<div className="tw:min-h-screen tw:flex tw:flex-col tw:items-center tw:justify-center tw:bg-gradient-to-r tw:from-blue-500 tw:to-blue-700">
			<div className="tw:d-card tw:w-96 tw:bg-white tw:shadow-2xl tw:p-6 tw:rounded-lg">
				<div className="tw:d-card-body">
					<h2 className="tw:d-card-title tw:text-3xl tw:font-bold tw:text-center tw:text-blue-600 tw:mb-4">
						Sign In
					</h2>
					{error && (
						<div className="tw:d-alert tw:d-alert-error tw:mb-4">
							<span>{error}</span>
						</div>
					)}
					<form onSubmit={handleSignIn} className="tw:space-y-6">
						<div className="tw:d-form-control">
							<label className="tw:d-label">
								<span className="tw:d-label-text tw:font-semibold">Role</span>
							</label>
							<select
								name="role"
								value={signInData.role}
								onChange={handleChange}
								className="tw:d-select tw:d-select-bordered tw:w-full tw:border-blue-500 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400"
							>
								{/*<option value="admin">Admin</option>*/}
								<option value="organizer">Organizer</option>
								<option value="attendee">Attendee</option>
							</select>
						</div>
						<div className="tw:d-form-control">
							<label className="tw:d-label">
								<span className="tw:d-label-text tw:font-semibold">Email</span>
							</label>
							<input
								type="email"
								placeholder="Enter your email"
								name="email"
								value={signInData.email}
								onChange={handleChange}
								className="tw:d-input tw:d-input-bordered tw:w-full tw:border-blue-500 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400"
								required
							/>
						</div>

						<div className="tw:d-form-control">
							<label className="tw:d-label">
								<span className="tw:d-label-text tw:font-semibold">
									Password
								</span>
							</label>
							<input
								type="password"
								placeholder="Enter your password"
								name="password"
								value={signInData.password}
								onChange={handleChange}
								minLength="8"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
								className="tw:d-input tw:d-input-bordered tw:w-full tw:border-blue-500 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400"
								required
							/>
						</div>

						<div className="tw:d-form-control tw:mt-6">
							<button
								type="submit"
								className="tw:d-btn tw:d-btn-primary tw:w-full tw:bg-blue-600 tw:hover:bg-blue-700 tw:text-white tw:font-semibold tw:text-lg"
							>
								Sign In
							</button>
						</div>
						<p className="tw:text-center tw:mt-4">
							Don't have an account?{" "}
							<span
								className="tw:text-blue-500 tw:cursor-pointer tw:underline"
								onClick={() => navigate("/sign-up")}
							>
								Sign Up
							</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
