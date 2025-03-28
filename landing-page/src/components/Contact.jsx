import React from "react";

export function Contact() {
	return (
		<section id="contact" className="tw:py-20 tw:bg-base-200">
			<div className="tw:container tw:mx-auto tw:px-4">
				<div className="tw:text-center tw:mb-12">
					<h2 className="tw:text-3xl tw:font-bold tw:mb-4">
						Ready to Get Started?
					</h2>
					<p className="tw:text-lg tw:opacity-70">
						Contact us today and transform your event management experience
					</p>
				</div>

				<div className="tw:grid tw:grid-cols-1 lg:tw:grid-cols-2 tw:gap-8 tw:max-w-4xl tw:mx-auto">
					<div className="tw:d-card tw:bg-base-100 tw:shadow-xl">
						<div className="tw:d-card-body">
							<h3 className="tw:d-card-title tw:mb-4">Contact Us</h3>
							<form className="tw:space-y-4">
								<div className="tw:d-form-control tw:flex tw:flex-col">
									<label className="tw:d-label">
										<span className="tw:d-label-text">Name</span>
									</label>
									<input
										type="text"
										placeholder="Your name"
										className="tw:d-input tw:d-input-bordered"
									/>
								</div>
								<div className="tw:d-form-control tw:flex tw:flex-col">
									<label className="tw:d-label">
										<span className="tw:d-label-text">Email</span>
									</label>
									<input
										type="email"
										placeholder="Your email"
										className="tw:d-input tw:d-input-bordered"
									/>
								</div>
								<div className="tw:d-form-control tw:flex tw:flex-col">
									<label className="tw:d-label">
										<span className="tw:d-label-text">Message</span>
									</label>
									<textarea
										className="tw:d-textarea tw:d-textarea-bordered tw:h-24"
										placeholder="Your message"
									></textarea>
								</div>
								<button className="tw:d-btn tw:d-btn-primary tw:w-full">
									Send Message
								</button>
							</form>
						</div>
					</div>

					<div className="tw:d-card tw:bg-base-100 tw:shadow-xl">
						<div className="tw:d-card-body">
							<h3 className="tw:d-card-title tw:mb-4">Why Choose Eventify?</h3>
							<ul className="tw:space-y-4">
								<li className="tw:flex tw:items-center tw:gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="tw:h-6 tw:w-6 tw:text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>Easy-to-use interface</span>
								</li>
								<li className="tw:flex tw:items-center tw:gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="tw:h-6 tw:w-6 tw:text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>24/7 customer support</span>
								</li>
								<li className="tw:flex tw:items-center tw:gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="tw:h-6 tw:w-6 tw:text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>Secure payment processing</span>
								</li>
								<li className="tw:flex tw:items-center tw:gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="tw:h-6 tw:w-6 tw:text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>Comprehensive analytics</span>
								</li>
							</ul>
							<div className="tw:mt-8">
								<button
									type="button"
									className="tw:d-btn tw:d-btn-primary tw:w-full"
								>
									Start Free Trial
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
