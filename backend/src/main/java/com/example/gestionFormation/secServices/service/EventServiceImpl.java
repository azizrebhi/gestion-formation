package com.example.gestionFormation.secServices.service;

import com.example.gestionFormation.entities.Event;
import com.example.gestionFormation.repositries.EventRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements IEventService{
    @Autowired
    private EventRepository eventRepository;
    @Override
    public Event addEvent(Event event) {
        return eventRepository.save(event);
    }

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
    public Event updateEvent(Long id, Event event) {
        Event existingEvent = eventRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Event not found"));
        existingEvent.setTitle(event.getTitle());
        existingEvent.setStartDate(event.getStartDate());
        existingEvent.setEndDate(event.getEndDate());
        existingEvent.setAllDay(event.getAllDay());
        existingEvent.setUrl(event.getUrl());
        existingEvent.setLocation(event.getLocation());
        existingEvent.setDescription(event.getDescription());
        existingEvent.setFormateur(event.getFormateur());
        return eventRepository.save(existingEvent);

    }

    @Override
    public Event getEventById(Long id) {
        return eventRepository.findById(id).orElse(null);
    }


}
