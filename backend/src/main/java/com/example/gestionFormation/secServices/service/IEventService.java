package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Event;

import java.time.LocalDateTime;
import java.util.List;

public interface IEventService {
   Event addEvent(Event event);
    List<Event> getAllEvents();
    public List<Event> getEventsByFormateurId(Long formateurId);
    void deleteEventById(Long idEvent);
    Event updateEvent(Long id, Event event);
    public Event getEventById(Long id);
 public Event respondToInvitation(Long id, String response, LocalDateTime availableStart, LocalDateTime availableEnd);
}
