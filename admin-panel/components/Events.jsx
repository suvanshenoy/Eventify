import React, { useState, useEffect } from "react";
import axios from "axios";

export function Events() {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await axios.get("http://localhost:8080/api/events/");
				if (response.data && Array.isArray(response.data)) {
					setEvents(response.data);
				} else {
					setError("Invalid data format received from server");
				}
				setLoading(false);
			} catch (err) {
				setError("Failed to fetch events: " + (err.message || "Unknown error"));
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	if (loading)
		return (
			<div className="tw:text-center tw:py-8 tw:d-loader">
				Loading events...
			</div>
		);
	if (error)
		return (
			<div className="tw:text-center tw:py-8 tw:text-red-500">{error}</div>
		);
	if (events.length === 0)
		return <div className="tw:text-center tw:py-8">No events found</div>;

	return (
		<>
			<section className="tw:py-16 tw:px-4 tw:bg-gray-50">
				<div className="tw:max-w-7xl tw:mx-auto">
					<h2 className="tw:text-4xl tw:font-bold tw:text-center tw:mb-12">
						Upcoming Events
					</h2>
					<div className="tw:grid tw:grid-cols-1 md:tw:grid-cols-2 lg:tw:grid-cols-3 tw:gap-8">
						{events.map((event) => (
							<div
								key={event.organized_id}
								className="tw:bg-white tw:rounded-lg tw:shadow-md tw:overflow-hidden hover:tw:shadow-lg tw:transition-shadow tw:duration-300"
							>
								<div className="tw:p-6">
									<h3 className="tw:text-2xl tw:font-bold tw:mb-3 tw:text-gray-800">
										{event.title}
									</h3>
									<p className="tw:text-gray-600 tw:mb-4 tw:line-clamp-3">
										{event.description}
									</p>
									<div className="tw:space-y-3">
										<div className="tw:flex tw:items-center tw:text-gray-700">
											<svg
												className="tw:w-5 tw:h-5 tw:mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
											<span>{new Date(event.event_date).toLocaleString()}</span>
										</div>
										<div className="tw:flex tw:items-center tw:text-gray-700">
											<svg
												className="tw:w-5 tw:h-5 tw:mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											<span>{event.location}</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
