package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "tracks")
public class Track {
    @Id
    @NotBlank(message = "Id is mandatory")
    private String id;

    public Track() {
    }

    public Track(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Track [id=" + id + "]";
    }
}
