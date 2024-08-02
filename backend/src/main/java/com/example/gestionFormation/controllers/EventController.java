package com.example.gestionFormation.controllers;

import com.example.gestionFormation.entities.Event;
import com.example.gestionFormation.secServices.service.EventServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    EventServiceImpl eventService;
    @PostMapping("/addEvent")
    public Event createEvent(@RequestBody Event event) {
        return eventService.addEvent(event);
    }
    @PutMapping("/updateEvent/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody @Valid Event event) {
        return eventService.updateEvent(id, event);
    }
    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }
    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable Long id) {
        eventService.deleteEventById(id);
    }

    @GetMapping("/formateur/{formateurId}")
    public List<Event> getEventsByFormateurId(@PathVariable Long formateurId) {
        return eventService.getEventsByFormateurId(formateurId);
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventService.getEventById(id);
    }
}
