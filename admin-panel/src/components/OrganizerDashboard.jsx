import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export function OrganizerDashboard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event_date: "",
    location: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/sign-in");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("organizerId"); // Clear organizerId on logout
    navigate("/sign-in");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title: formData.title,
      description: formData.description,
      event_date: formData.event_date, // Matches Event.java
      location: formData.location,
      organizer_id: parseInt(localStorage.getItem("organizerId")) || 1, // Send as Long
    };
    console.log("Sending payload:", JSON.stringify(eventData, null, 2)); // Debug
    axios
      .post("http://localhost:8080/api/events/create", eventData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Event created successfully:", response.data);
        navigate("/events");
      })
      .catch((error) => {
        console.error("Error creating event:", error.response?.data || error.message); // Detailed error
      });
  };

  return (
    <div className="tw:min-h-screen tw:bg-gray-100">
      <nav className="tw:bg-blue-600 tw:p-4">
        <div className="tw:container tw:mx-auto tw:flex tw:justify-between tw:items-center">
          <h1 className="tw:text-white tw:text-2xl tw:font-bold">
            Organizer Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="tw:bg-red-500 tw:text-white tw:px-4 tw:py-2 tw:rounded tw:hover:tw:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="tw:container tw:mx-auto tw:p-6">
        <h2 className="tw:text-3xl tw:font-semibold tw:mb-4">
          Welcome, Organizer!
        </h2>
        <div className="tw:bg-white tw:p-6 tw:rounded-lg tw:shadow-md tw:mb-6">
          <p>This is your organizer dashboard. Here you can create and manage events.</p>
        </div>

        {/* Event Creation Form */}
        <div className="tw:bg-white tw:p-6 tw:rounded-lg tw:shadow-md">
          <h3 className="tw:text-xl tw:font-semibold tw:mb-4">Create Event</h3>
          <form onSubmit={handleSubmit} className="tw:space-y-4">
            <div>
              <label className="tw:block tw:font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="tw:w-full tw:p-2 tw:border tw:border-gray-300 tw:rounded"
                required
              />
            </div>
            <div>
              <label className="tw:block tw:font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="tw:w-full tw:p-2 tw:border tw:border-gray-300 tw:rounded"
              />
            </div>
            <div>
              <label className="tw:block tw:font-medium">Event Date & Time</label>
              <input
                type="datetime-local"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                className="tw:w-full tw:p-2 tw:border tw:border-gray-300 tw:rounded"
                required
              />
            </div>
            <div>
              <label className="tw:block tw:font-medium">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="tw:w-full tw:p-2 tw:border tw:border-gray-300 tw:rounded"
              />
            </div>
            <button
              type="submit"
              className="tw:bg-blue-600 tw:text-white tw:px-4 tw:py-2 tw:rounded hover:tw:bg-blue-700"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}