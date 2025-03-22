import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/event-organizers">Event Organizers</Link></li>
        <li><Link to="/attendees">Attendees</Link></li>
        <li><Link to="/events">Events</Link></li>

      </ul>
    </div>
  );
};

export default Sidebar;
