package com.example.demo.dto;

public class EventsDataDto {
    public String image;
    public String event;
    public String url;

    public EventsDataDto() {

    }

    public EventsDataDto(String image, String event, String url) {
        this.image = image;
        this.event = event;
        this.url = url;
    }
}
