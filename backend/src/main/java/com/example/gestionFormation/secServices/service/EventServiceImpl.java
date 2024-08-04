package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Event;
import com.example.gestionFormation.repositries.EventRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventServiceImpl implements IEventService{
   @Autowired
    private EventRepository eventRepository;
    @Override
    public Event addEvent(Event event) {
        event.setStatus("Pending");
        return eventRepository.save(event);
    }
  /*  public Event addEvent(Event event) {
        return eventRepository.save(event);
    }*/

    @Override
    public List<Event> getAllEvents() {
        return null;
    }

    @Override
    public List<Event> getEventsByFormateurId(Long formateurId) {
        return eventRepository.findByFormateurId(formateurId);
    }

    @Override
    public void deleteEventById(Long idEvent) {

    }

    @Override
    public Event updateEvent(Long id, Event updatedEvent) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
        event.setTitle(updatedEvent.getTitle());
        event.setStartDate(updatedEvent.getStartDate());
        event.setEndDate(updatedEvent.getEndDate());
        event.setAllDay(updatedEvent.getAllDay());
        event.setUrl(updatedEvent.getUrl());
        event.setLocation(updatedEvent.getLocation());
        event.setDescription(updatedEvent.getDescription());
        event.setStatus(updatedEvent.getStatus());
        event.setAvailableStart(updatedEvent.getAvailableStart());
        event.setAvailableEnd(updatedEvent.getAvailableEnd());
        return eventRepository.save(event);
    }

    @Override
    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    @Override
    public Event respondToInvitation(Long id, String response, LocalDateTime availableStart, LocalDateTime availableEnd) {
        Event event = eventRepository.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
        event.setStatus(response);
        if ("Rejected".equals(response)) {
            event.setAvailableStart(availableStart);
            event.setAvailableEnd(availableEnd);
        }
        return eventRepository.save(event);
    }
    }



