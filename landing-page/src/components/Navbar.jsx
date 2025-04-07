import React, { useState } from "react";
import { Link } from "react-router";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="tw:flex tw:items-center tw:bg-base-100 tw:fixed tw:top-0 tw:z-50 tw:shadow-md tw:w-full tw:px-2">
			<div className="tw:flex-1">
				<Link
					to="/"
					className="tw:d-btn tw:d-btn-ghost tw:normal-case tw:text-xl"
				>
					Eventify
				</Link>
				<div className="tw:dropdown">
					<label
						tabIndex={0}
						className="tw:d-btn tw:d-btn-ghost tw:lg:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="tw:h-5 tw:w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className={`tw:d-menu tw:d-menu-sm tw:d-dropdown-content tw:mt-3 tw:z-[1] tw:p-2 tw:shadow tw:bg-base-100 tw:d-rounded-box tw:w-52 ${isMenuOpen ? "tw:block" : "tw:hidden"}`}
					>
						<li>
							<a href="#features">Features</a>
						</li>
						<li>
							<a href="#how-it-works">How It Works</a>
						</li>
						<li>
							<a href="#testimonials">Testimonials</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="tw:hidden tw:lg:flex tw:flex-1 tw:justify-center">
				<ul className="tw:d-menu tw:d-menu-horizontal tw:px-1">
					<li>
						<a href="#features">Features</a>
					</li>
					<li>
						<a href="#how-it-works">How It Works</a>
					</li>
					<li>
						<a href="#testimonials">Testimonials</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			<div className="tw:flex-1 tw:flex tw:justify-end">
				<Link to="/signup" className="tw:d-btn tw:d-btn-primary">
					Get Started
				</Link>
			</div>
		</div>
	);
}
