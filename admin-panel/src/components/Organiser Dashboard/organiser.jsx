import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, Users } from "lucide-react";

const events = [
  {
    id: 1,
    name: "IIT Madras Research Park",
    date: "March 28, 2025",
    attendees: 120,
  },
  {
    id: 2,
    name: "Incridea",
    date: "April 5, 2025",
    attendees: 1000,
  },
];

export default function OrganizerDashboard() {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Organizer Dashboard</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">My Events</a></li>
          <li><a href="#" className="hover:underline">Create Event</a></li>
          <li><a href="#" className="hover:underline">Attendees</a></li>
        </ul>
      </nav>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">My Events</h1>
          <Button variant="default" className="flex items-center gap-2">
            <Plus size={16} /> Create Event
          </Button>
        </div>
        <div className="space-y-4">
          {events.map((event) => (
            <Card key={event.id} className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{event.name}</h2>
                <p className="text-gray-500 flex items-center gap-1">
                  <Calendar size={16} /> {event.date}
                </p>
                <p className="text-gray-500 flex items-center gap-1">
                  <Users size={16} /> {event.attendees} Attendees
                </p>
              </div>
              <Button variant="outline">Manage Events</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
