import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import process from "node:process";

export function SignUp() {
	const [signUpData, setSignUpData] = useState({
		role: "organizer",
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
    const apiBaseUrl =  "http://localhost:8082"

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSignUpData({ ...signUpData, [name]: value });
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		setError("");

		try {
			const response = await axios.post(
				`${apiBaseUrl}/api/admin/signup`,
				signUpData,
				{ responseType: "json" },
			);
			navigate("/sign-in");
		} catch (error) {
			if (error.response) {
				setError(error.response.data);
			} else {
				setError("Sign up failed!, Please try again.");
			}
		}
	};

	return (
		<div className="tw:min-h-screen tw:flex tw:items-center tw:justify-center tw:bg-gradient-to-r tw:from-blue-500 tw:to-blue-700">
			<div className="tw:d-card tw:w-96 tw:bg-white tw:shadow-2xl tw:p-6 tw:rounded-lg">
				<div className="tw:d-card-body">
					<h2 className="tw:d-card-title tw:text-3xl tw:font-bold tw:text-center tw:text-blue-600 tw:mb-4">
						Sign Up
					</h2>
					{error && (
						<div className="tw:d-alert tw:d-alert-error tw:mb-4">
							<span>{error}</span>
						</div>
					)}
					<form onSubmit={handleSignUp} className="tw:space-y-6">
						<div className="tw:d-form-control">
							<label className="tw:d-label">
								<span className="tw:d-label-text tw:font-semibold">Role</span>
							</label>
							<select
								name="role"
								value={signUpData.role}
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
								<span className="tw:d-label-text tw:font-semibold">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Enter your name"
								value={signUpData.name}
								onChange={handleChange}
								className="tw:d-input tw:d-input-bordered tw:w-full tw:border-blue-500 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400"
								required
							/>
						</div>

						<div className="tw:d-form-control">
							<label className="tw:d-label">
								<span className="tw:d-label-text tw:font-semibold">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								value={signUpData.email}
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
								name="password"
								placeholder="Enter your password"
								value={signUpData.password}
								onChange={handleChange}
								minLength="8"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must be at least 8 characters, including a number, a lowercase letter, and an uppercase letter"
								className="tw:d-input tw:d-input-bordered tw:w-full tw:border-blue-500 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400"
								required
							/>
						</div>

						<div className="tw:d-form-control tw:mt-6">
							<button
								type="submit"
								className="tw:d-btn tw:d-btn-primary tw:w-full tw:bg-blue-600 tw:hover:bg-blue-700 tw:text-white tw:font-semibold tw:text-lg"
							>
								Sign Up
							</button>
						</div>
						<p className="tw:text-center tw:mt-4">
							Already have an account?{" "}
							<span
								className="tw:text-blue-500 tw:cursor-pointer tw:underline"
								onClick={() => navigate("/sign-in")}
							>
								Sign In
							</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
