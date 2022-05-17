package com.example.demo.controller;

import java.util.List;

import com.example.demo.dto.EventsDataDto;
import com.example.demo.services.EventsDataService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/events")
public class EventsDataController {
    
    @Autowired
    private EventsDataService eventsDataService;

    @GetMapping("data")
    public ResponseEntity<List<EventsDataDto>> getEventsData() {
        return new ResponseEntity<List<EventsDataDto>>(eventsDataService.retrieveEventsData(), HttpStatus.OK);
    }
}
