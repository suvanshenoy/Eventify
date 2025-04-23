import React from "react";
import { Link } from "react-router";

export function Footer() {
	return (
		<footer className="tw:bg-base-200 tw:text-base-content">
			<div className="tw:container tw:mx-auto tw:px-4 tw:py-12">
				<div className="tw:grid tw:grid-cols-1 md:tw:grid-cols-4 tw:gap-8">
					<div>
						<h3 className="tw:text-lg tw:font-bold tw:mb-4">Eventify</h3>
						<p className="tw:text-sm tw:opacity-80">
							Your one-stop platform for creating and managing unforgettable
							events.
						</p>
					</div>

					<div>
						<h3 className="tw:text-lg tw:font-bold tw:mb-4">Quick Links</h3>
						<ul className="tw:space-y-2">
							<li>
								<Link to="/about" className="tw:link tw:link-hover tw:text-sm">
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/features"
									className="tw:link tw:link-hover tw:text-sm"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									to="/pricing"
									className="tw:link tw:link-hover tw:text-sm"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link to="/blog" className="tw:link tw:link-hover tw:text-sm">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="tw:text-lg tw:font-bold tw:mb-4">Support</h3>
						<ul className="tw:space-y-2">
							<li>
								<Link
									to="/contact"
									className="tw:link tw:link-hover tw:text-sm"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link to="/faq" className="tw:link tw:link-hover tw:text-sm">
									FAQ
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="tw:link tw:link-hover tw:text-sm"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="/terms" className="tw:link tw:link-hover tw:text-sm">
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="tw:text-lg tw:font-bold tw:mb-4">Connect With Us</h3>
						<div className="tw:flex tw:space-x-4">
							<Link to="#twitter" className="tw:btn tw:btn-circle tw:btn-ghost">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									className="tw:fill-current"
								>
									<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
								</svg>
							</Link>
							<Link to="#youtube" className="tw:btn tw:btn-circle tw:btn-ghost">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									className="tw:fill-current"
								>
									<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
								</svg>
							</Link>
							<Link
								to="#facebook"
								className="tw:btn tw:btn-circle tw:btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									className="tw:fill-current"
								>
									<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
								</svg>
							</Link>
							<Link
								to="#linkedin"
								className="tw:btn tw:btn-circle tw:btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									className="tw:fill-current"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.768-.277-1.27-1.11-1.27-.914 0-1.39.406-1.39 1.27v5.604h-3v-11h3v1.765c.481-.78 1.206-1.424 2.724-1.424 1.905 0 3.5 1.137 3.5 3.861v6.798z" />
								</svg>
							</Link>
						</div>
					</div>
				</div>

				<div className="tw:border-t tw:border-base-300 tw:mt-8 tw:pt-8 tw:text-center">
					<p className="tw:text-sm">
						Copyright © {new Date().getFullYear()} Eventify. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
