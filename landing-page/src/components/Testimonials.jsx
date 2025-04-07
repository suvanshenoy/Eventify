import React from "react";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Event Planner",
		company: "Corporate Events Inc.",
		content:
			"Eventify has revolutionized how we manage our corporate events. The platform is intuitive and saves us countless hours.",
		avatar: "👩‍💼",
	},
	{
		name: "Michael Chen",
		role: "Wedding Coordinator",
		company: "Wedding Bliss",
		content:
			"The guest management features are outstanding. It makes handling RSVPs and communications so much easier.",
		avatar: "👨‍💼",
	},
	{
		name: "Emma Davis",
		role: "Conference Organizer",
		company: "TechCon",
		content:
			"The analytics and reporting tools have helped us make better decisions for our events. Highly recommended!",
		avatar: "👩‍💻",
	},
];

export function Testimonials() {
	return (
		<section id="testimonials" className="tw:py-20 tw:bg-base-100">
			<div className="tw:container tw:mx-auto tw:px-4">
				<h2 className="tw:text-3xl tw:font-bold tw:text-center tw:mb-12">
					What Our Clients Say
				</h2>
				<div className="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 lg:tw:grid-cols-3 tw:gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="tw:d-card tw:bg-base-200 tw:shadow-xl">
							<div className="tw:d-card-body">
								<div className="tw:flex tw:items-center tw:gap-4 tw:mb-4">
									<div className="tw:text-4xl">{testimonial.avatar}</div>
									<div>
										<h3 className="tw:font-bold">{testimonial.name}</h3>
										<p className="tw:text-sm tw:opacity-70">
											{testimonial.role} at {testimonial.company}
										</p>
									</div>
								</div>
								<p className="tw:italic">"{testimonial.content}"</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
