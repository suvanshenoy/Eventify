import React from "react";

const steps = [
	{
		number: "1",
		title: "Create Your Event",
		description: "Set up your event details, date, and basic information",
	},
	{
		number: "2",
		title: "Customize Settings",
		description: "Configure your event settings, ticketing, and branding",
	},
	{
		number: "3",
		title: "Invite Guests",
		description: "Send invitations and manage your guest list",
	},
	{
		number: "4",
		title: "Track & Manage",
		description:
			"Monitor attendance, manage registrations, and track analytics",
	},
];

export function HowItWorks() {
	return (
		<section id="how-it-works" className="tw:py-20 tw:bg-base-200">
			<div className="tw:container tw:mx-auto tw:px-4">
				<h2 className="tw:text-3xl tw:font-bold tw:text-center tw:mb-12">
					How It Works
				</h2>
				<div className="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 lg:tw:grid-cols-4 tw:gap-8">
					{steps.map((step, index) => (
						<div key={index} className="tw:d-card tw:bg-base-100 tw:shadow-xl">
							<div className="tw:d-card-body tw:items-center tw:text-center">
								<div className="tw:w-12 tw:h-12 tw:rounded-full tw:bg-blue-600 tw:text-primary-content tw:flex tw:items-center tw:justify-center tw:text-xl tw:font-bold tw:mb-4">
									{step.number}
								</div>
								<h3 className="tw:d-card-title">{step.title}</h3>
								<p>{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
