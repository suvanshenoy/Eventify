import React from "react";

export function Hero() {
	return (
		<div className="tw:min-h-screen tw:bg-base-200">
			<div className="tw:flex tw:items-center tw:justify-center tw:min-h-screen">
				<div className="tw:text-center">
					<div className="tw:max-w-md">
						<h1 className="tw:text-5xl tw:font-bold">Eventify</h1>
						<p className="tw:py-6">
							Streamline your event management with our powerful platform. From
							planning to execution, we've got you covered.
						</p>
						<div className="tw:flex tw:gap-4 tw:justify-center">
							<button type="button" className="tw:d-btn tw:d-btn-primary">
								Get Started
							</button>
							<button type="button" className="tw:d-btn tw:d-btn-ghost">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
