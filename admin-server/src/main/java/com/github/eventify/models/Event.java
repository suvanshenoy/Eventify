package com.example.eventify.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long event_id;

    private Long organizer_id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private LocalDateTime event_date;

    private String location;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false, updatable = false)
    private LocalDateTime created_at;

    public Long getEvent_id() { return event_id; }
    public void setEvent_id(Long event_id) { this.event_id = event_id; }

    public Long getOrganizer_id() { return organizer_id; }
    public void setOrganizer_id(Long organizer_id) { this.organizer_id = organizer_id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDateTime getEvent_date() { return event_date; }
    public void setEvent_date(LocalDateTime event_date) { this.event_date = event_date; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public LocalDateTime getCreated_at() { return created_at; }
}
