package com.github.eventify.repositories;

import com.github.eventify.models.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface OrganizerRepository extends JpaRepository<Organizer, Long> {
    Optional<Organizer> findByEmail(String email);
}
