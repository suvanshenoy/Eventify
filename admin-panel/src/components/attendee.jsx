import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar } from "lucide-react";

const events = [
  {
    id: 1,
    name: "Hackathon",
    date: "March 28, 2025",
    location: "IIT Madras Park, Chennai",
    checkedIn: true,
  },
  {
    id: 2,
    name: "Incridea",
    date: "April 5, 2025",
    location: "NMAM Institute of Technology, Nitte",
    checkedIn: false,
  },
];

export default function AttendeeDashboard() {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Event Management</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
          <li><a href="#" className="hover:underline">Our Services</a></li>
          <li><a href="#" className="hover:underline">Our Event Organizers</a></li>
        </ul>
      </nav>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Events</h1>
        <div className="space-y-4">
          {events.map((event) => (
            <Card key={event.id} className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{event.name}</h2>
                <p className="text-gray-500 flex items-center gap-1">
                  <Calendar size={16} /> {event.date}
                </p>
                <p className="text-gray-500">{event.location}</p>
              </div>
              <div>
                {event.checkedIn ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <CheckCircle size={20} /> Checked In
                  </span>
                ) : (
                  <Button variant="default">Check In</Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
