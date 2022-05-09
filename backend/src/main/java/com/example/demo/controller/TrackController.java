package com.example.demo.controller;

import com.example.demo.entity.Track;
import com.example.demo.repository.TrackRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tracks")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TrackController {
    @Autowired
    TrackRepository trackRepo;

    @RequestMapping("")
    public ResponseEntity<Object> findUsers() {
        return ResponseEntity.ok(trackRepo.findAll());
    }

    @PostMapping("")
    public Track newTrack(@RequestBody Track track) {
        return trackRepo.save(track);
    }

    @GetMapping("/{id}")
    public Track one(@PathVariable String id) {
        return trackRepo.findById(id).orElseThrow();
    }

    @DeleteMapping("/{id}")
    void deleteTrack(@PathVariable String id) {
        trackRepo.deleteById(id);
    }
}

