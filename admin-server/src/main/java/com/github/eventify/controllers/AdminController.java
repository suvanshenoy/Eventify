package com.example.eventify.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.eventify.models.Organizer;
import com.example.eventify.models.Attendee;
import com.example.eventify.models.UserRequest;
import com.example.eventify.repositories.OrganizerRepository;
import com.example.eventify.repositories.AttendeeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173",allowedHeaders ="*" ,
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.OPTIONS})
public class AdminController {

    private final OrganizerRepository organizerRepository;
    private final AttendeeRepository attendeeRepository;

    public AdminController(OrganizerRepository organizerRepository, AttendeeRepository attendeeRepository) {
        this.organizerRepository = organizerRepository;
        this.attendeeRepository = attendeeRepository;
    }

    // API to fetch counts of organizers and attendees
    @GetMapping("/stats")
    public StatsResponse getStats() {
        long organizers = organizerRepository.count();
        long attendees = attendeeRepository.count();
        return new StatsResponse(organizers, attendees);
    }
    @GetMapping("/signup")
    public ResponseEntity<String> getSignup() {
        return ResponseEntity.ok("GET signup endpoint reached!");
    }
    // API to register a new user (either Attendee or Organizer)
    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody UserRequest userRequest) {
        if ("attendee".equalsIgnoreCase(userRequest.getRole())) {
            Optional<Attendee> existingAttendee = attendeeRepository.findByEmail(userRequest.getEmail());
            if (existingAttendee.isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Attendee already exists!");
            }
            Attendee attendee = new Attendee();
            attendee.setName(userRequest.getName());
            attendee.setEmail(userRequest.getEmail());
            attendee.setPassword(userRequest.getPassword()); // Consider encrypting the password
            attendeeRepository.save(attendee);
        } else if ("organizer".equalsIgnoreCase(userRequest.getRole())) {
            Optional<Organizer> existingOrganizer = organizerRepository.findByEmail(userRequest.getEmail());
            if (existingOrganizer.isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Organizer already exists!");
            }
            Organizer organizer = new Organizer();
            organizer.setName(userRequest.getName());
            organizer.setEmail(userRequest.getEmail());
            organizer.setPassword(userRequest.getPassword()); // Consider encrypting the password
            organizerRepository.save(organizer);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid role selected!");
        }
        return ResponseEntity.ok("User registered successfully!");
    }
    @GetMapping("/signin")
    public ResponseEntity<String> getSignInMessage() {
        return ResponseEntity.ok("GET request is not supported for sign-in. Please use POST.");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody UserRequest userRequest) {
        Optional<Attendee> attendee = attendeeRepository.findByEmail(userRequest.getEmail());
        if (attendee.isPresent() && attendee.get().getPassword().equals(userRequest.getPassword())) {
            return ResponseEntity.ok(new AuthResponse("attendee", "sample-token")); // Replace with real token generation
        }

        Optional<Organizer> organizer = organizerRepository.findByEmail(userRequest.getEmail());
        if (organizer.isPresent() && organizer.get().getPassword().equals(userRequest.getPassword())) {
            return ResponseEntity.ok(new AuthResponse("organizer", "sample-token")); // Replace with real token generation
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }

    // Helper class to send response
    static class AuthResponse {
        public String role;
        public String token;

        public AuthResponse(String role, String token) {
            this.role = role;
            this.token = token;
        }
    }


    // Response class for dashboard stats
    static class StatsResponse {
        public long organizers;
        public long attendees;

        public StatsResponse(long organizers, long attendees) {
            this.organizers = organizers;
            this.attendees = attendees;
        }
    }
}

