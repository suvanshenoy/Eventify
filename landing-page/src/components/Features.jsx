import React from "react";

const features = [
	{
		title: "Event Planning",
		description: "Comprehensive tools for planning every aspect of your event",
		icon: "📅",
	},
	{
		title: "Guest Management",
		description: "Easily manage guest lists, RSVPs, and communications",
		icon: "👥",
	},
	{
		title: "Budget Tracking",
		description: "Keep track of expenses and manage your event budget",
		icon: "💰",
	},
	{
		title: "Real-time Analytics",
		description: "Get insights into your event performance and attendance",
		icon: "📊",
	},
];

export function Features() {
	return (
		<section id="features" className="tw:py-20 tw:bg-base-100">
			<div className="tw:container tw:mx-auto tw:px-4">
				<h2 className="tw:text-3xl tw:font-bold tw:text-center tw:mb-12">
					Why Choose Eventify?
				</h2>
				<div className="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 lg:tw:grid-cols-4 tw:gap-8">
					{features.map((feature, index) => (
						<div key={index} className="tw:d-card tw:bg-base-200 tw:shadow-xl">
							<div className="tw:d-card-body tw:items-center tw:text-center">
								<div className="tw:text-4xl tw:mb-4">{feature.icon}</div>
								<h3 className="tw:d-card-title">{feature.title}</h3>
								<p>{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
